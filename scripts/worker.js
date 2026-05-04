self.onmessage = (e) => {
    let TotalMassas = e.data.m1 + e.data.m2 + e.data.m3 + e.data.m4 + e.data.m5 + e.data.m6 + e.data.m7 + e.data.m8 + e.data.m9 + e.data.m10,
        P1 = e.data.m1*e.data.g, 
        P2 = e.data.m2*e.data.g, 
        P3 = e.data.m3*e.data.g, 
        P4 = e.data.m4*e.data.g, 
        P5 = e.data.m5*e.data.g, 
        P6 = e.data.m6*e.data.g, 
        P7 = e.data.m7*e.data.g,
        P8 = e.data.m8*e.data.g,
        P9 = e.data.m9*e.data.g,
        P10 = e.data.m10*e.data.g,
        Px1 = Math.sin((e.data.angle/180)*Math.PI)*P1,
        Py1 = N1 = Math.cos((e.data.angle/180)*Math.PI)*P1,
        Px2 = Math.sin((e.data.angle/180)*Math.PI)*P2,
        Py2 = N2 = Math.cos((e.data.angle/180)*Math.PI)*P2,
        Fae1 = e.data.Me*N1,
        Fae2 = e.data.Me*N2,
        Fad1 = e.data.Md*N1,
        Fad2 = e.data.Md*N2,
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

    let message = `
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
    `;

    self.postMessage(message);
};