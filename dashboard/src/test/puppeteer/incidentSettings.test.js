const puppeteer = require('puppeteer');
const utils = require('./test-utils');
const init = require('./test-init');
const { Cluster } = require('puppeteer-cluster');
const {
    incidentDefaultSettings,
} = require('../../../../backend/backend/config/incidentDefaultSettings');
require('should');

// user credentials
const email = utils.generateRandomBusinessEmail();
const password = '1234567890';

const componentName = utils.generateRandomString();
const monitorName = utils.generateRandomString();
const newDefaultIncidentTitle = 'TEST: {{monitorName}}';
const newDefaultIncidentDescription = 'TEST: {{incidentType}}';
const incidentType = 'offline';
const inctidentTitleAfterSubstitution = `TEST: ${monitorName}`;
const inctidentDescriptionAfterSubstitution = `TEST: ${incidentType}`;

describe('Incident Settings API', () => {
    const operationTimeOut = 500000;

    let cluster;

    beforeAll(async () => {
        jest.setTimeout(500000);

        cluster = await Cluster.launch({
            concurrency: Cluster.CONCURRENCY_PAGE,
            puppeteerOptions: utils.puppeteerLaunchConfig,
            puppeteer,
            timeout: utils.timeout,
        });

        cluster.on('taskerror', err => {
            throw err;
        });

        return await cluster.execute(null, async ({ page }) => {
            const user = {
                email,
                password,
            };
            await init.registerUser(user, page);
            await init.loginUser(user, page);
            await init.addMonitorToComponent(componentName, monitorName, page);
        });
    });

    afterAll(async () => {
        await cluster.idle();
        await cluster.close();
    });

    test(
        'Should fill title,description and priority fields with default values.',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                await page.goto(utils.DASHBOARD_URL, {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector('#projectSettings');
                await page.click('#projectSettings');
                await page.waitForSelector('#incidentSettings');
                await page.click('#incidentSettings');
                await page.waitForSelector('input[name=title]');
                await page.waitFor(3000);
                const priorityFieldValue = await page.$eval(
                    '#incidentPriority',
                    e => e.textContent
                );
                expect(priorityFieldValue).toEqual('High');
                const titleFieldValue = await page.$eval(
                    'input[name=title]',
                    e => e.value
                );
                expect(titleFieldValue).toEqual(incidentDefaultSettings.title);
                const descriptionFieldValue = await page.$eval(
                    '.ace_layer.ace_text-layer',
                    e => e.textContent
                );
                expect(descriptionFieldValue).toEqual(
                    incidentDefaultSettings.description
                );
            });
        },
        operationTimeOut
    );

    test(
        'Should not set the default incident priority to a removed value.',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                //Create a new priority
                const priorityName = utils.generateRandomString();
                await page.goto(utils.DASHBOARD_URL, {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector('#projectSettings');
                await page.click('#projectSettings');
                await page.waitForSelector('#incidentSettings');
                await page.click('#incidentSettings');
                await page.waitForSelector('#addNewPriority');
                await page.click('#addNewPriority');
                await page.waitForSelector('#CreateIncidentPriority');
                await page.type('input[name=name]', priorityName);
                await page.click('#CreateIncidentPriority');
                await page.waitFor(3000);
                await page.reload({
                    waitUntil: 'networkidle0',
                });

                //Select the priority in incidentSettings form
                await init.selectByText(
                    '#incidentPriority',
                    priorityName,
                    page
                );
                //Delete the new incident priority.
                const deleteButtonLastRowIndentifier =
                    '#incidentPrioritiesList>div>div>div>div.bs-ObjectList-row:last-of-type>div:nth-child(2)>div>div:nth-child(2)>button';
                await page.click(deleteButtonLastRowIndentifier);
                await page.waitForSelector('#RemoveIncidentPriority');
                await page.click('#RemoveIncidentPriority');
                await page.waitFor(3000);
                //Try to save the incident settings
                await page.click('#saveButton');
                await page.waitForSelector('#errorInfo');
                const errorMessage = await page.$eval(
                    '#errorInfo',
                    e => e.textContent
                );
                expect(errorMessage).toEqual(
                    `Incident priority doesn't exist.`
                );
            });
        },
        operationTimeOut
    );

    test(
        'Should update default title, description and priority fields',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                await page.goto(utils.DASHBOARD_URL, {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector('#projectSettings');
                await page.click('#projectSettings');
                await page.waitForSelector('#incidentSettings');
                await page.click('#incidentSettings');
                await page.waitForSelector('input[name=title]');
                await page.waitFor(3000);
                await init.selectByText('#incidentPriority', 'low', page);
                await page.click('input[name=title]', { clickCount: 3 });
                await page.keyboard.press('Backspace');
                await page.type('input[name=title]', newDefaultIncidentTitle);

                await page.click('#description');
                await page.keyboard.down('Control');
                await page.keyboard.press('A');
                await page.keyboard.up('Control');
                await page.type('#description', newDefaultIncidentDescription);
                await page.click('#saveButton');
                await page.reload({
                    waitUntil: 'networkidle0',
                });
                await page.waitFor(3000);
                await page.waitForSelector('input[name=title]');
                const priorityFieldValue = await page.$eval(
                    '#incidentPriority',
                    e => e.textContent
                );
                expect(priorityFieldValue).toEqual('Low');
                const titleFieldValue = await page.$eval(
                    'input[name=title]',
                    e => e.value
                );
                expect(titleFieldValue).toEqual(newDefaultIncidentTitle);
                const descriptionFieldValue = await page.$eval(
                    '.ace_layer.ace_text-layer',
                    e => e.textContent
                );
                expect(descriptionFieldValue).toEqual(
                    newDefaultIncidentDescription
                );
            });
        },
        operationTimeOut
    );

    test(
        'Should fill title, description and priority fields on the incident creation form with the default values',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                await init.navigateToMonitorDetails(
                    componentName,
                    monitorName,
                    page
                );
                await page.waitForSelector(
                    `#monitorCreateIncident_${monitorName}`
                );
                await page.click(`#monitorCreateIncident_${monitorName}`);
                await page.waitForSelector('#title');
                await page.waitFor(3000);
                const priorityFieldValue = await page.$eval(
                    '#incidentPriority',
                    e => e.textContent
                );
                expect(priorityFieldValue).toEqual('Low');
                const titleFieldValue = await page.$eval(
                    '#title',
                    e => e.value
                );
                expect(titleFieldValue).toEqual(inctidentTitleAfterSubstitution);
                const descriptionFieldValue = await page.$eval(
                    '.ace_layer.ace_text-layer',
                    e => e.textContent
                );
                expect(descriptionFieldValue).toEqual(
                    inctidentDescriptionAfterSubstitution
                );
                await init.selectByText('#incidentType', incidentType, page);
                await page.click('#createIncident');
                await page.waitForSelector('#closeIncident_0');
                await page.click('#closeIncident_0');
            });
        },
        operationTimeOut
    );

    test(
        'Should substitute variables in title, description when an incident is created',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                await init.navigateToMonitorDetails(
                    componentName,
                    monitorName,
                    page
                );
                await page.waitForSelector('#react-tabs-2');
                await page.click('#react-tabs-2');
                await page.waitForSelector(
                    'tr.incidentListItem:first-of-type > td:nth-of-type(3)'
                );
                await page.click(
                    'tr.incidentListItem:first-of-type > td:nth-of-type(3)'
                );
                const incidentTitleSelector =
                    '.bs-Fieldset-rows>.bs-Fieldset-row:nth-of-type(3)>div>span';
                const incidentDescriptionSelector =
                    '.bs-Fieldset-rows>.bs-Fieldset-row:nth-of-type(4)>div>p';
                const incidentPrioritySelector =
                    '.bs-Fieldset-rows>.bs-Fieldset-row:nth-of-type(5) div';
                await page.waitForSelector(incidentTitleSelector);
                const title = await page.$eval(
                    incidentTitleSelector,
                    e => e.textContent
                );
                const description = await page.$eval(
                    incidentDescriptionSelector,
                    e => e.textContent
                );
                const incidentPriority = await page.$eval(
                    incidentPrioritySelector,
                    e => e.textContent
                );
                expect(title).toEqual(inctidentTitleAfterSubstitution);
                expect(description).toEqual(
                    inctidentDescriptionAfterSubstitution
                );
                expect(incidentPriority).toEqual('Low');
            });
        },
        operationTimeOut
    );

    test(
        'Should remove incident priority on incident, if the default priority is removed',
        async () => {
            return await cluster.execute(null, async ({ page }) => {
                await page.goto(utils.DASHBOARD_URL, {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector('#projectSettings');
                await page.click('#projectSettings');
                await page.waitForSelector('#incidentSettings');
                await page.click('#incidentSettings');
                await page.waitForSelector('#incidentPrioritiesList');
                //change default priority before remove the priority
                await init.selectByText('#incidentPriority', 'high', page);
                await page.click('#saveButton');
                await page.waitFor(3000);
                const lowPriorityDeleteButton =
                    '#incidentPrioritiesList .bs-ObjectList-row.db-UserListRow.db-UserListRow--withName:nth-of-type(2) .bs-ObjectList-cell.bs-u-v-middle:nth-of-type(2)>div>div:last-child>button';
                await page.click(lowPriorityDeleteButton);
                await page.waitForSelector('#RemoveIncidentPriority');
                await page.click('#RemoveIncidentPriority');
                //check in the monitor's incident list if the priority has been removed.
                await init.navigateToMonitorDetails(
                    componentName,
                    monitorName,
                    page
                );
                await page.waitForSelector('#react-tabs-2');
                await page.click('#react-tabs-2');
                await page.waitForSelector(
                    'tr.incidentListItem:first-of-type > td:nth-of-type(3)'
                );
                await page.click(
                    'tr.incidentListItem:first-of-type > td:nth-of-type(3)'
                );
                const incidentTitleSelector =
                    '.bs-Fieldset-rows>.bs-Fieldset-row:nth-of-type(3)>div>span';
                const incidentStatusBoxSelector = '#incident_0';
                await page.waitForSelector(incidentTitleSelector);
                const incidentStatusBoxContent = await page.$eval(
                    incidentStatusBoxSelector,
                    e => e.textContent
                );
                expect(incidentStatusBoxContent).not.toContain('Priority');
                expect(incidentStatusBoxContent).not.toContain('Low');
            });
        },
        operationTimeOut
    );
});
