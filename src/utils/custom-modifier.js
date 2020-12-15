import { modifierCapabilities, setModifierManager, } from '@glimmer/core';
class CustomModifier {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    didInsertElement(_positional, _named) { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    didUpdate(_positional, _named) { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    willDestroyElement() { }
}
class CustomModifierManager {
    constructor(owner) {
        this.owner = owner;
        this.capabilities = modifierCapabilities('3.13');
    }
    createModifier(factory) {
        return new factory(this.owner);
    }
    installModifier(instance, element, args) {
        instance.element = element;
        const { positional, named } = args;
        instance.didInsertElement(positional, named);
    }
    updateModifier(instance, args) {
        const { positional, named } = args;
        instance.didUpdate(positional, named);
    }
    destroyModifier(instance) {
        instance.willDestroyElement();
    }
}
setModifierManager((owner) => new CustomModifierManager(owner), CustomModifier);

export default CustomModifier;
