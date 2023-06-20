"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.recipient, " owes ").concat(this.amount, "e for ").concat(this.details);
    };
    Invoice.prototype.get_client = function () {
        return "".concat(this.recipient);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
