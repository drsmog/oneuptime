enum PageMap {
    INIT = 'INIT',
    HOME = 'HOME',

    INCIDENTS = 'INCIDENTS',
    INCIDENT_VIEW = 'INCIDENT_VIEW',
    INCIDENT_VIEW_DELETE = 'INCIDENT_VIEW_DELETE',
    INCIDENT_VIEW_STATE_TIMELINE = 'INCIDENT_VIEW_STATE_TIMELINE',
    INCIDENT_INTERNAL_NOTE = 'INCIDENT_INTERNAL_NOTE',
    INCIDENT_PUBLIC_NOTE = 'INCIDENT_PUBLIC_NOTE',

    MONITORS = 'MONITORS',
    MONITOR_VIEW = 'MONITOR_VIEW',
    MONITOR_VIEW_DELETE = 'MONITOR_VIEW_DELETE',
    MONITOR_VIEW_STATUS_TIMELINE = 'MONITOR_VIEW_STATUS_TIMELINE',

    STATUS_PAGE = 'STATUSPAGE',
    LOGS = 'LOGS',
    ON_CALL_DUTY = 'ON_CALL_DUTY',
    AUTOMATION_SCRIPTS = 'AUTOMATION_SCRIPTS',
    REPORTS = 'REPORTS',
    ERROR_TRACKER = 'ERROR_TRACKER',

    // Settings Routes
    SETTINGS = 'SETTINGS',
    SETTINGS_DANGERZONE = 'SETTINGS_DANGERZONE',

    // API Keys.
    SETTINGS_APIKEYS = 'SETTINGS_APIKEYS',
    SETTINGS_APIKEY_VIEW = 'SETTINGS_APIKEY_VIEW',
    SETTINGS_CUSTOM_SMTP = 'SETTINGS_CUSTOM_SMTP',

    // Team
    SETTINGS_TEAMS = 'SETTINGS_TEAMS',
    SETTINGS_TEAM_VIEW = 'SETTINGS_TEAM_VIEW',

    // Resource settings.
    SETTINGS_INCIDENTS_STATE = 'SETTINGS_INCIDENTS_STATE',
    SETTINGS_MONITORS_STATUS = 'SETTINGS_MONITORS_STATUS',

    // Labels.
    SETTINGS_LABELS = 'SETTINGS_LABELS',

    // Misc
    LOGOUT = 'LOGOUT',
}

export default PageMap;
