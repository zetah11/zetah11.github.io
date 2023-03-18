"use strict";


/**
 * Waits for a click event on the given element.
 * */
class Click {
    constructor(element) {
        if (typeof element === "string")
            element = $(element);

        this.element = element
    }

    resolve(cont) {
        this.element.onclick = cont;
    }

    dislodge() {
        this.element.onclick = undefined;
    }
}


/**
 * Waits for a change event on the given element.
 * */
class Change {
    constructor(element) {
        if (typeof element === "string")
            element = $(element);

        this.element = element;
    }

    resolve(cont) {
        this.element.onchange = cont;
    }

    dislodge() {
        this.element.onchange = undefined;
    }
}


/**
 * Waits for an input event on the given element.
 * */
class Input {
    constructor(element) {
        if (typeof element === "string")
            element = $(element);

        this.element = element;
    }

    resolve(cont) {
        this.element.oninput = cont;
    }

    dislodge() {
        this.element.oninput = undefined;
    }
}


/**
 * Waits for a submit event on the given element.
 * */
class Submit {
    constructor(element) {
        if (typeof element === "string")
            element = $(element);

        this.element = element;
    }

    resolve(cont) {
        this.element.onsubmit = ev => {
            ev.preventDefault();
            cont(ev);
        };
    }

    dislodge() {
        this.element.onsubmit = undefined;
    }
}


/**
 * This takes an arbitrary number of different events as input, and waits for
 * the first one to be resumed.
 * */
class Any {
    constructor(...choices) {
        this.choices = choices
    }

    resolve(cont) {
        const N = this.choices.length;
        for (let i = 0; i < N; i++) {
            this.choices[i].resolve(arg => {
                for (const choice of this.choices)
                    choice.dislodge();

                const results = Array.apply(null, Array());
                results[i] = arg;
                cont(results);
            });
        }
    }

    dislodge() {
        for (const choice of this.choices) {
            choice.dislodge();
        }
    }
}


/**
 * This takes an arbitrary number of different events as input, and waits for
 * them all to complete before resuming.
 * */
class All {
    constructor(...events) {
        this.events = events
    }

    resolve(cont) {
        const N = this.events.length;
        const done = Array.apply(null, Array(N)).map(() => false);
        const results = Array(N);
        const change = () => {
            if (done.every(x => x))
                cont(results);
        };

        for (let i = 0; i < N; i++) {
            this.events[i].resolve(arg => {
                this.events[i].dislodge();
                done[i] = true;
                results[i] = arg;
                change();
            });
        }
    }

    dislodge() {
        for (const event of this.events)
            event.dislodge();
    }
}


/**
 * Call this like `run(a, b, c)` where `a`, `b`, and `c` are the individual
 * UI functions.
 * */
function run(...entries) {
    const handle = (generator, argument) => {
        const result = generator.next(argument);

        if (!result.done) {
            result.value.resolve(arg => handle(generator, arg));
        }
    };

    if (document.readyState === "complete")
        for (const entry of entries)
            handle(entry(), undefined);
    else
        window.onload = () => {
            for (const entry of entries)
                handle(entry(), undefined);
        };
}

/**
 * Convenience function to select an element using a CSS selector string
 * */
const $ = selector => document.querySelector(selector);
