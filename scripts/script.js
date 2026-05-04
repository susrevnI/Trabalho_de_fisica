const values = document.getElementsByClassName("values");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const m4 = document.getElementById("m4");
const m5 = document.getElementById("m5");
const m6 = document.getElementById("m6");
const m7 = document.getElementById("m7");
const m8 = document.getElementById("m8");
const m9 = document.getElementById("m9");
const m10 = document.getElementById("m10");
const angle = document.getElementById("angle");
const Me = document.getElementById("Me");
const Md = document.getElementById("Md");
const calc_btn = document.getElementById("calc-btn");
const result = document.getElementById("result");

const g = 9.8;

let worker = null;

/**
 * Impede que os campos fiquem vazios
 */
for (let index = 0; index < values.length; index++) {
    values[index].addEventListener("input", function() {
        this.value = this.value.replace(/^0+/, '');

        if (this.value === '' || this.value === null) {
            this.value = 0; 
        }
    });
}

/**
 * F = m*a
 * P = m*g
 * Px = sin(θ)*P
 * Py = cos(θ)*P
 * N = Py
 * Fae = Me*N
 * Fad = Md*N
 * Fplano = Pxa + Pxb
 * Fsuspenso = Pc + Pd + ...
 * Fre = abs(Fplano-Fsuspenso) - Faetotal
 * Frd = abs(Fplano-Fsuspenso) - Fadtotal
 * a = Frd/(ma+mb+...)
 */
calc_btn.addEventListener("click", () => {
    let data = {
        m1:Number(m1.value),
        m2:Number(m2.value),
        m3:Number(m3.value),
        m4:Number(m4.value),
        m5:Number(m5.value),
        m6:Number(m6.value),
        m7:Number(m7.value),
        m8:Number(m8.value),
        m9:Number(m9.value),
        m10:Number(m10.value),
        angle:Number(angle.value),
        Me:Number(Me.value),
        Md:Number(Md.value),
        g:g
    }

    if (worker) {
        worker.terminate();
    }

    worker = new Worker("scripts/worker.js");

    worker.postMessage(data);

    worker.onmessage = (e) => {
        result.innerHTML = e.data;
    }
});
