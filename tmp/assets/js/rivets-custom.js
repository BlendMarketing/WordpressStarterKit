import $ from "jquery";
import rivets from "rivets";

/**
 * This binder adds a class to an element equal to the value of the keypath.
 */
rivets.binders.addclass = (el, value) => {
    if(el.addedClass) {
        $(el).removeClass(el.addedClass);
        delete el.addedClass;
    }

    if(value) {
        $(el).addClass(value);
        el.addedClass = value;
    }
};
