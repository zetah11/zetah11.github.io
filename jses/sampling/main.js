const bucketSize = 0.01;
const iters = 100;

window.onload = () => {
    const input = document.getElementById("script");
    const range = document.getElementById("range");
    const presets = document.getElementById("preset");

    input.value = presets.value;

    const canvas = (() => {
        const canvas = document.getElementById("histogram");
        return canvas.getContext("2d");
    })();

    const [width, height] = [canvas.canvas.width, canvas.canvas.height];

    let data = [];
    let userFn = () => Math.random() * Math.random() + Math.random();

    input.onkeyup = event => {
        compile();
    };

    presets.onchange = event => {
        input.value = presets.value;
        compile();
    };

    window.setInterval(
        () => {
            for (let i = 0; i < iters; i++) {
                data.push(userFn());
            }

            drawHistogram();
        },
        75
    );

    const compile = () => {
        const text = prepareScript(input.value);

        try {
            // eval and check for nan to abort on syntax errors etc
            const v = Number((0, eval)(text));
            console.log(v);
            if (Number.isNaN(v) || v === undefined) return;
            userFn = () => {
                return (0, eval)(text);
            };
        } catch (error) {
            return;
        }

        data = [];
    };

    const prepareScript = text => {
        let result = "";

        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode("a".charCodeAt(0) + i);
            result += `const ${letter} = Math.random();`;
        }

        result += text;
        return result;
    };

    compile();

    const drawHistogram = () => {
        const fill = window.getComputedStyle(document.body).getPropertyValue("--a1");
        const stroke = window.getComputedStyle(document.body).getPropertyValue("--fg");

        canvas.fillStyle = fill;
        canvas.strokeStyle = undefined;

        const buckets = new Map();

        let tallest = 0;
        let max = 0;
        let min = 0

        for (const datum of data) {
            let bucket = Math.floor(datum / bucketSize) * bucketSize;

            let count;
            if (buckets.has(bucket)) {
                count = buckets.get(bucket) + 1;
            } else {
                count = 1;
            }

            buckets.set(bucket, count);

            max = Math.max(max, bucket);
            min = Math.min(min, bucket);
            tallest = Math.max(tallest, count);
        }

        range.innerText = `Range ${min} to ${max + bucketSize}`;

        canvas.clearRect(0, 0, width, height);

        for (const [bucket, count] of buckets) {
            // + 1 to avoid ugliness
            const w = width * bucketSize / (max - min) + 1;
            const x = width * (bucket - min) / (max - min);
            const h = height * (count / tallest);
            const y = height - h;

            canvas.fillRect(x, y, w, h);
        }

        let x;
        if (min == max) {
            x = width / 2;
        } else {
            x = width * (-min) / (max - min);
        }

        canvas.beginPath();
        canvas.strokeStyle = stroke;
        canvas.moveTo(x, 0);
        canvas.lineTo(x, height);
        canvas.stroke();
    };
};
