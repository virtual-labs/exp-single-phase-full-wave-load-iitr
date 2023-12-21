function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["G1"]["fire"] != 0 &&
    values["G2"]["fire"] != 0 &&
    values["I1"]["fire"] != 0 &&
    values["G3"]["fire"] != 0
  ) {
    const wave_forms = generategraphfinal();
    console.log(wave_forms);
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "882px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "V<sub>INP</sub>  ",
          marker: {
            color: "Orange",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse1";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse1",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "V<sub>GP1</sub>  ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "V<sub>GP2</sub> ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse2";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse2",
      [
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "V<sub>GP3</sub>  ",
          marker: {
            color: "Red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "V<sub>GP4</sub> ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM6"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "V<sub>L</sub>   ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM7"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "I<sub>L</sub>   ",
          marker: {
            color: "#ab49dd",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["AC2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (
                (1 / 10) * parseFloat(wave_forms[0][1])),
            parseFloat(wave_forms[0][1]) +
              (1 / 10) * parseFloat(wave_forms[0][1]),
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "thy1_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy1_voltage",
      [
        {
          x: wave_forms[6][1],
          y: wave_forms[6][0],
          mode: "lines",
          name: "V<sub>T1</sub>  ",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "V<sub>T2</sub>",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title:
          "<b>" +
          values["VM1"]["name"].toUpperCase() +
          "/" +
          values["VM8"]["name"].toUpperCase() +
          "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "thy2_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy2_voltage",
      [
        {
          x: wave_forms[7][1],
          y: wave_forms[7][0],
          mode: "lines",
          name: "V<sub>T3</sub>  ",
          marker: {
            color: "#23c66b",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "V<sub>T4</sub>",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title:
          "<b>" +
          values["VM2"]["name"].toUpperCase() +
          "/" +
          values["VM5"]["name"].toUpperCase() +
          "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}

function generategraphfinal() {
  const sineamplitude = values["AC1"]["volt"];
  const freq = values["AC1"]["freq"];
  const sta1 = values["G1"]["freq"];
  const end1 = values["G1"]["fire"];
  const sta2 = values["G3"]["freq"];
  const end2 = values["G3"]["fire"];
  const loadResistance = values["R1"]["value"];
  var timep = 1 / freq;
  var timp = timep;
  var sine_wave,
    flag = false;
  var starting1 = (timep / 360) * sta1;
  var ending1 = (timep / 360) * end1;
  var starting2 = (timep / 360) * sta2;
  var ending2 = (timep / 360) * end2;
  var xval = [],
    input_voltage = [],
    load_voltage = [],
    thy1_voltage = [],
    thy2_voltage = [],
    current = [],
    gate_pulse1 = [],
    gate_pulse2 = [];
  var vavg_use = 0,
    vrms_use = 0;
  for (let x = 0; x <= 0.06; x += 0.00001) {
    sine_wave = sineamplitude * Math.sin(2 * Math.PI * freq * x);
    input_voltage.push(sine_wave);
    xval.push(x);
    if (sine_wave > 0) {
      if (x >= starting1) {
        load_voltage.push(sine_wave);
        thy1_voltage.push(0);
        thy2_voltage.push(-1 * sine_wave);
        current.push(sine_wave / loadResistance);
        vavg_use = vavg_use + sine_wave;
        vrms_use = vrms_use + sine_wave * sine_wave;
      } else {
        load_voltage.push(0);
        current.push(0);
        thy1_voltage.push(sine_wave / 2);
        thy2_voltage.push(-1 * (sine_wave / 2));
      }
    } else {
      if (x <= ending2) {
        if (x >= starting2) {
          load_voltage.push(-1 * sine_wave);
          thy2_voltage.push(0);
          thy1_voltage.push(sine_wave);
          current.push((-1 * sine_wave) / loadResistance);
          vavg_use = vavg_use - sine_wave;
          vrms_use = vrms_use + sine_wave * sine_wave;
          flag = true;
        } else {
          load_voltage.push(0);
          current.push(0);
          thy2_voltage.push(-1 * (sine_wave / 2));
          thy1_voltage.push(sine_wave / 2);
        }
      } else if (flag) {
        load_voltage.push(-1 * sine_wave);
        thy2_voltage.push(0);
        thy1_voltage.push(sine_wave);
        current.push((-1 * sine_wave) / loadResistance);
        vavg_use = vavg_use - sine_wave;
        vrms_use = vrms_use + sine_wave * sine_wave;
      } else {
        load_voltage.push(0);
        current.push(0);
        thy2_voltage.push(-1 * (sine_wave / 2));
        thy1_voltage.push(sine_wave / 2);
      }
    }

    if (starting1 <= x && x <= ending1) {
      gate_pulse1.push(1);
    } else {
      gate_pulse1.push(0);
    }

    if (starting2 <= x && x <= ending2) {
      gate_pulse2.push(1);
    } else {
      gate_pulse2.push(0);
    }

    if (x >= timep) {
      starting1 = starting1 + timp;
      ending1 = ending1 + timp;
      starting2 = starting2 + timp;
      ending2 = ending2 + timp;
      timep = timep + timp;
      flag = false;
    }
  }
  var vavg = (sineamplitude / Math.PI) * (1 + Math.cos(sta1 * (Math.PI / 180)));
  vavg = vavg_use / input_voltage.length;
  var iavg = vavg / loadResistance;
  var vrms =
    (sineamplitude / Math.sqrt(2 * Math.PI)) *
    Math.sqrt(
      Math.PI -
        sta1 * (Math.PI / 180) +
        Math.sin(2 * (sta1 * (Math.PI / 180))) / 2
    );
  vrms = Math.sqrt(vrms_use / input_voltage.length);
  var irms = vrms / loadResistance;
  if (vrms < 1) {
    vrms = parseInt(vrms * 10000) / 10000;
  } else {
    vrms = parseInt(vrms * 100) / 100;
  }
  if (irms < 1) {
    irms = parseInt(irms * 10000) / 10000;
  } else {
    irms = parseInt(irms * 100) / 100;
  }
  if (vavg < 1) {
    vavg = parseInt(vavg * 10000) / 10000;
  } else {
    vavg = parseInt(vavg * 100) / 100;
  }
  if (iavg < 1) {
    iavg = parseInt(iavg * 10000) / 10000;
  } else {
    iavg = parseInt(iavg * 100) / 100;
  }
  values["vavg"] = vavg;
  values["iavg"] = iavg;
  values["vrms"] = vrms;
  values["irms"] = irms;

  return [
    [sineamplitude, sineamplitude / loadResistance],
    [input_voltage, xval],
    [gate_pulse1, xval],
    [gate_pulse2, xval],
    [load_voltage, xval],
    [current, xval],
    [thy1_voltage, xval],
    [thy2_voltage, xval],
  ];
}
