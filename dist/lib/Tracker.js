"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tracker {
    constructor() {
        this[Symbol.toStringTag] = "Tracker";
    }
    get announce() { return this._tracker.announce; }
    ;
    get id() { return this._tracker.id; }
    ;
    get scrape() { return this._tracker.scrape; }
    ;
    get tier() { return this._tracker.tier; }
    ;
    serialize() {
        return JSON.stringify(this);
    }
    toJSON() {
        return this._tracker;
    }
    deserialize(input) {
        if (typeof input === "string")
            input = JSON.parse(input);
        this._tracker = Object.assign({}, this._tracker, input);
        return this;
    }
}
exports.Tracker = Tracker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvVHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXNDQTtJQUFBO1FBQ0ksS0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBMkJyQyxDQUFDO0lBdkJHLElBQUksUUFBUSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3pELElBQUksRUFBRSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQzdDLElBQUksTUFBTSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3JELElBQUksSUFBSSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBSWpELFNBQVM7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBd0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO1lBQzFCLEtBQUssR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQTVCRCwwQkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VyaWFsaXphYmxlIH0gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUcmFja2VyIHtcbiAgICBhbm5vdW5jZTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgc2NyYXBlOiBzdHJpbmc7XG4gICAgdGllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmFja2VyU3RhdCB7XG4gICAgYW5ub3VuY2U6IHN0cmluZztcbiAgICBhbm5vdW5jZVN0YXRlOiBudW1iZXI7XG4gICAgZG93bmxvYWRDb3VudDogbnVtYmVyO1xuICAgIGhhc0Fubm91bmNlZDogYm9vbGVhbjtcbiAgICBoYXNTY3JhcGVkOiBib29sZWFuO1xuICAgIGhvc3Q6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIGlzQmFja3VwOiBib29sZWFuO1xuICAgIGxhc3RBbm5vdW5jZVBlZXJDb3VudDogbnVtYmVyO1xuICAgIGxhc3RBbm5vdW5jZVJlc3VsdDogc3RyaW5nO1xuICAgIGxhc3RBbm5vdW5jZVN0YXJ0VGltZTogbnVtYmVyO1xuICAgIGxhc3RBbm5vdW5jZVN1Y2NlZWRlZDogYm9vbGVhbjtcbiAgICBsYXN0QW5ub3VuY2VUaW1lOiBudW1iZXI7XG4gICAgbGFzdEFubm91bmNlVGltZWRPdXQ6IGJvb2xlYW47XG4gICAgbGFzdFNjcmFwZVJlc3VsdDogc3RyaW5nO1xuICAgIGxhc3RTY3JhcGVTdGFydFRpbWU6IG51bWJlcjtcbiAgICBsYXN0U2NyYXBlU3VjY2VlZGVkOiBib29sZWFuO1xuICAgIGxhc3RTY3JhcGVUaW1lOiBudW1iZXI7XG4gICAgbGFzdFNjcmFwZVRpbWVkT3V0OiBudW1iZXI7XG4gICAgbGVlY2hlckNvdW50OiBudW1iZXI7XG4gICAgbmV4dEFubm91bmNlVGltZTogbnVtYmVyO1xuICAgIG5leHRTY3JhcGVUaW1lOiBudW1iZXI7XG4gICAgc2NyYXBlOiBzdHJpbmc7XG4gICAgc2NyYXBlU3RhdGU6IG51bWJlcjtcbiAgICBzZWVkZXJDb3VudDogbnVtYmVyO1xuICAgIHRpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIgaW1wbGVtZW50cyBSZWFkb25seTxJVHJhY2tlcj4sIElTZXJpYWxpemFibGU8SVRyYWNrZXIsIFRyYWNrZXI+IHtcbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9IFwiVHJhY2tlclwiO1xuXG4gICAgcHJpdmF0ZSBfdHJhY2tlcjogSVRyYWNrZXI7XG5cbiAgICBnZXQgYW5ub3VuY2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3RyYWNrZXIuYW5ub3VuY2UgfTtcbiAgICBnZXQgaWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RyYWNrZXIuaWQgfTtcbiAgICBnZXQgc2NyYXBlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl90cmFja2VyLnNjcmFwZSB9O1xuICAgIGdldCB0aWVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90cmFja2VyLnRpZXIgfTtcblxuICAgIHN0YXRzOiBJVHJhY2tlclN0YXQ7XG5cbiAgICBzZXJpYWxpemUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cblxuICAgIHRvSlNPTigpOiBJVHJhY2tlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFja2VyO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0OiBzdHJpbmcgfCBJVHJhY2tlcik6IFRyYWNrZXIge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgaW5wdXQgPSA8SVRyYWNrZXI+SlNPTi5wYXJzZShpbnB1dCk7XG5cbiAgICAgICAgdGhpcy5fdHJhY2tlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3RyYWNrZXIsIGlucHV0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59Il19