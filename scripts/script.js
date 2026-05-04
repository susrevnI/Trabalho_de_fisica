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
    let TotalMassas = Number(m1.value) + Number(m2.value) + Number(m3.value) + Number(m4.value) + Number(m5.value) + Number(m6.value) + Number(m7.value) + Number(m8.value) + Number(m9.value) + Number(m10.value),
        P1 = m1.value*g, 
        P2 = m2.value*g, 
        P3 = m3.value*g, 
        P4 = m4.value*g, 
        P5 = m5.value*g, 
        P6 = m6.value*g, 
        P7 = m7.value*g,
        P8 = m8.value*g,
        P9 = m9.value*g,
        P10 = m10.value*g,
        Px1 = Math.sin((angle.value/180)*Math.PI)*P1,
        Py1 = N1 = Math.cos((angle.value/180)*Math.PI)*P1,
        Px2 = Math.sin((angle.value/180)*Math.PI)*P2,
        Py2 = N2 = Math.cos((angle.value/180)*Math.PI)*P2,
        Fae1 = Me.value*N1,
        Fae2 = Me.value*N2,
        Fad1 = Md.value*N1,
        Fad2 = Md.value*N2,
        Faetotal = Fae1 + Fae2,
        Fadtotal = Fad1 + Fad2,
        Fplano = Px1 + Px2,
        Fsuspenso = P3 + P4 + P5 + P6 + P7 + P8 + P9 + P10,
        Fr = Math.abs(Fplano-Fsuspenso),
        Fre = Fr - Faetotal,
        Frd = Fr - Fadtotal,
        a = 0;
    
    if (Fre > 0) {
        a = Frd/TotalMassas;
    }

    result.innerHTML = `
        <p>TotalMassas = ${TotalMassas}</p>
        <p>P1 = ${P1.toFixed(2)}</p>
        <p>P2 = ${P2.toFixed(2)}</p>
        <p>P3 = ${P3.toFixed(2)}</p>
        <p>P4 = ${P4.toFixed(2)}</p>
        <p>P5 = ${P5.toFixed(2)}</p>
        <p>P6 = ${P6.toFixed(2)}</p>
        <p>P7 = ${P7.toFixed(2)}</p>
        <p>P8 = ${P8.toFixed(2)}</p>
        <p>P9 = ${P9.toFixed(2)}</p>
        <p>P10 = ${P10.toFixed(2)}</p>
        <p>Px1 = ${Px1.toFixed(2)}</p>
        <p>Py1 = N1 = ${Py1.toFixed(2)}</p>
        <p>Px2 = ${Px2.toFixed(2)}</p>
        <p>Py2 = N2 = ${Py2.toFixed(2)}</p>
        <p>Fae1 = ${Fae1.toFixed(2)}</p>
        <p>Fae2 = ${Fae2.toFixed(2)}</p>
        <p>Fad1 = ${Fad1.toFixed(2)}</p>
        <p>Fad2 = ${Fad2.toFixed(2)}</p>
        <p>Faetotal = ${Faetotal.toFixed(2)}</p>
        <p>Fadtotal = ${Fadtotal.toFixed(2)}</p>
        <p>Fplano = ${Fplano.toFixed(2)}</p>
        <p>Fsuspenso = ${Fsuspenso.toFixed(2)}</p>
        <p>Fr = ${Fr.toFixed(2)}</p>
        <p>Fre = ${Fre.toFixed(2)}</p>
        <p>Frd = ${Frd.toFixed(2)}</p>
        <p>a = ${a.toFixed(2)}</p>
    `
});
