import CompareBase from './CompareBase';

export default class GreaterThanOrEqual extends CompareBase {
    constructor(value: number | Date) {
        super(value);
    }
}
