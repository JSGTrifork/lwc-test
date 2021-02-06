import { LightningElement, api } from 'lwc';

export default class Sub extends LightningElement {
    _targetLanguage;

    @api
    get targetLanguage() {
        return this._targetLanguage;
    }

    set targetLanguage(val) {
        this._targetLanguage = val;
    }

}