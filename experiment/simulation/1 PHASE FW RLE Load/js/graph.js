function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["L1"]["value"] != 0 &&
    values["DC1"]["value"] != 0 &&
    values["G1"]["fire"] != 0 &&
    values["G2"]["fire"] != 0 &&
    values["G3"]["fire"] != 0 &&
    values["I1"]["fire"] != 0
  ) {
    const wave_forms = generatedGraph();
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
          name: "V<sub>INP</sub>",
          marker: {
            color: "Orange",
          },
        },
        {
          x: wave_forms[8][1],
          y: wave_forms[8][0],
          mode: "lines",
          name: "V<sub>DC</sub>",
          marker: {
            color: "green",
          },
        },
      ],
      {
        title:
          "<b>" +
          values["VM3"]["name"].toUpperCase() +
          "/" +
          values["VM9"]["name"] +
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
function generatedGraph() {
  const sineamp = parseInt(values["AC1"]["volt"]);
  const freq = parseInt(values["AC1"]["freq"]);
  const sta1 = parseInt(values["G1"]["freq"]);
  const end1 = parseInt(values["G1"]["fire"]);
  const sta2 = parseInt(values["G3"]["freq"]);
  const end2 = parseInt(values["G3"]["fire"]);
  const resistance = parseInt(values["R1"]["value"]);
  const inductance = parseInt(values["L1"]["value"]) * 0.001;
  const E = parseInt(values["DC1"]["value"]);
  var timep = 1 / freq;
  var half_timep = timep / 2;
  var starting1 = (timep / 360) * sta1;
  var ending1 = (timep / 360) * end1;
  var starting2 = (timep / 360) * sta2;
  var ending2 = (timep / 360) * end2;
  var phi = Math.atan((2 * Math.PI * freq * inductance) / resistance);
  var z = Math.sqrt(
    resistance * resistance +
      2 * Math.PI * freq * inductance * (2 * Math.PI * freq * inductance)
  );
  var sine1,
    sine2,
    i,
    beta1,
    beta2,
    tim = 0;
  if (starting1 <= half_timep) {
    var first_cycle_flag = true;
  } else {
    var first_cycle_flag = false;
  }
  if (ending2 < half_timep) {
    var second_cycle_flag = false;
  } else {
    var second_cycle_flag = true;
  }
  var flag;
  if (first_cycle_flag) {
    for (let x = 0; x <= timep; x += 0.00001) {
      if (x >= starting1) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * x - phi) -
          (sineamp / z) *
            Math.sin(sta1 * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * x - sta1 * (Math.PI / 180))
            ) -
          (E / resistance) *
            (1 -
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
              ));
        if (i > 0) {
          flag = true;
        }
        if (flag) {
          if (i <= 0) {
            beta1 = (x / timep) * 360;
            flag = false;
            break;
          }
        }
      }
    }
  }
  if (second_cycle_flag) {
    for (let x = 0; x <= timep; x += 0.00001) {
      if (x > starting2 - half_timep && starting2 - half_timep >= 0) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * x - phi) -
          (sineamp / z) *
            Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * x - (sta2 * (Math.PI / 180) - Math.PI))
            ) -
          (E / resistance) *
            (1 -
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) -
                    (sta2 * (Math.PI / 180) - Math.PI))
              ));
        if (i > 0) {
          flag = true;
        }
        if (flag) {
          if (i <= 0) {
            beta2 = (x / timep) * 360;
            flag = false;
            break;
          }
        }
      }
    }
  }
  var save_starting2 = starting2;
  if (second_cycle_flag) {
    if (starting2 < half_timep) {
      starting2 = half_timep;
    }
  }
  var input_voltage = [],
    load_current = [],
    load_voltage = [],
    thy1 = [],
    thy2 = [],
    gate1 = [],
    gate2 = [],
    xval = [],
    dcvalue = [],
    max_current = 0,
    voltage_flag1 = false,
    voltage_flag2 = false,
    vrms = 0,
    irms = 0,
    iavg = 0,
    vavg = 0;
  if (first_cycle_flag && second_cycle_flag) {
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      dcvalue.push(E);
      if (x >= save_starting2 + timep) {
        ending2 += timep;
        save_starting2 += timep;
      }
      if (sine1 >= E) {
        voltage_flag1 = true;
      }
      if (x > starting1 + timep) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        tim += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (voltage_flag1) {
        if (x >= starting1 && x <= starting2) {
          i =
            (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
            (sineamp / z) *
              Math.sin(sta1 * (Math.PI / 180) - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
              ) -
            (E / resistance) *
              (1 -
                Math.exp(
                  -1 *
                    (resistance / (2 * Math.PI * freq * inductance)) *
                    (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
                ));
          if (i > max_current) {
            max_current = i;
          }
          if (i >= 0) {
            load_voltage.push(sine1);
            vrms = vrms + sine1 * sine1;
            irms = irms + i * i;
            iavg = iavg + i;
            vavg = vavg + sine1;
            load_current.push(i);
            thy1.push(0);
            thy2.push(sine2);
          } else {
            load_voltage.push(E);
            vrms = vrms + E * E;
            vavg = vavg + E;
            load_current.push(0);
            thy1.push(sine1 / 2);
            thy2.push(sine2 / 2);
          }
        } else if (x >= starting2) {
          i =
            (sineamp / z) *
              Math.sin(2 * Math.PI * freq * (x - half_timep - tim) - phi) -
            (sineamp / z) *
              Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - half_timep - tim) -
                    (sta2 * (Math.PI / 180) - Math.PI))
              ) -
            (E / resistance) *
              (1 -
                Math.exp(
                  -1 *
                    (resistance / (2 * Math.PI * freq * inductance)) *
                    (2 * Math.PI * freq * (x - half_timep - tim) -
                      (sta2 * (Math.PI / 180) - Math.PI))
                ));
          if (i > max_current) {
            max_current = i;
          }
          if (i >= 0) {
            load_voltage.push(sine2);
            irms = irms + i * i;
            iavg = iavg + i;
            vrms = vrms + sine2 * sine2;
            vavg = vavg + sine2;
            load_current.push(i);
            thy1.push(sine1);
            thy2.push(0);
          } else {
            vrms = vrms + E * E;
            vavg = vavg + E;
            load_voltage.push(E);
            load_current.push(0);
            thy1.push(sine1 / 2);
            thy2.push(sine2 / 2);
          }
        } else {
          load_voltage.push(E);
          vrms = vrms + E * E;
          vavg = vavg + E;
          load_current.push(0);
          thy1.push(sine1 / 2);
          thy2.push(sine2 / 2);
        }
      } else {
        load_voltage.push(E);
        vrms = vrms + E * E;
        vavg = vavg + E;
        load_current.push(0);
        thy1.push(sine1 / 2);
        thy2.push(sine2 / 2);
      }
    }
  } else if (first_cycle_flag) {
    var time_p = timep;
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      dcvalue.push(E);
      if (sine1 >= E) {
        voltage_flag1 = true;
      }
      if (x > time_p) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        save_starting2 += timep;
        tim += timep;
        time_p += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (voltage_flag1) {
        if (x >= starting1) {
          i =
            (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
            (sineamp / z) *
              Math.sin(sta1 * (Math.PI / 180) - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
              ) -
            (E / resistance) *
              (1 -
                Math.exp(
                  -1 *
                    (resistance / (2 * Math.PI * freq * inductance)) *
                    (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
                ));
          if (i > max_current) {
            max_current = i;
          }
          if (i >= 0) {
            load_voltage.push(sine1);
            irms = irms + i * i;
            iavg = iavg + i;
            vrms = vrms + sine1 * sine1;
            vavg = vavg + sine1;
            load_current.push(i);
            thy1.push(0);
            thy2.push(sine2);
          } else {
            load_voltage.push(E);
            vrms = vrms + E * E;
            vavg = vavg + E;
            load_current.push(0);
            thy1.push(sine1 / 2);
            thy2.push(sine2 / 2);
          }
        } else {
          load_voltage.push(E);
          vrms = vrms + E * E;
          vavg = vavg + E;
          load_current.push(0);
          thy1.push(sine1 / 2);
          thy2.push(sine2 / 2);
        }
      } else {
        load_voltage.push(E);
        vrms = vrms + E * E;
        vavg = vavg + E;
        load_current.push(0);
        thy1.push(sine1 / 2);
        thy2.push(sine2 / 2);
      }
    }
  } else if (second_cycle_flag) {
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      dcvalue.push(E);
      if (sine1 >= E) {
        voltage_flag1 = true;
      }
      if (x > starting2 + timep) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        save_starting2 += timep;
        tim += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (voltage_flag1) {
        if (x >= starting2) {
          i =
            (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
            (sineamp / z) *
              Math.sin(sta1 * (Math.PI / 180) - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
              ) -
            (E / resistance) *
              (1 -
                Math.exp(
                  -1 *
                    (resistance / (2 * Math.PI * freq * inductance)) *
                    (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
                ));
          if (i > max_current) {
            max_current = i;
          }
          if (i >= 0) {
            load_voltage.push(sine1);
            vrms = vrms + sine1 * sine1;
            irms = irms + i * i;
            iavg = iavg + i;
            vavg = vavg + sine1;
            load_current.push(i);
            thy1.push(0);
            thy2.push(sine2);
          } else {
            load_voltage.push(E);
            vrms = vrms + E * E;
            load_current.push(0);
            thy1.push(sine1 / 2);
            thy2.push(sine2 / 2);
          }
        } else {
          load_voltage.push(E);
          vrms = vrms + E * E;
          load_current.push(0);
          thy1.push(sine1 / 2);
          thy2.push(sine2 / 2);
        }
      } else {
        load_voltage.push(E);
        vrms = vrms + E * E;
        load_current.push(0);
        thy1.push(sine1 / 2);
        thy2.push(sine2 / 2);
      }
    }
  } else {
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      dcvalue.push(E);
      if (sine1 >= E) {
        voltage_flag1 = true;
      }
      if (x > starting2 + timep) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        save_starting2 += timep;
        tim += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }

      load_voltage.push(E);
      vrms = vrms + E * E;
      load_current.push(0);
      thy1.push(sine1 / 2);
      thy2.push(sine2 / 2);
    }
  }
  vrms = Math.sqrt(vrms / load_voltage.length);
  irms = Math.sqrt(irms / load_voltage.length);
  vavg = (vavg / load_voltage.length);
  iavg = (iavg / load_voltage.length);
  `var vavg =
    ((Math.sqrt(2) * sineamp) / Math.PI) *
    (Math.cos(sta1 * (Math.PI / 180)) -
      Math.cos(beta1 * (Math.PI / 180)) -
      Math.sin(Math.PI + sta1 * (Math.PI / 180) - beta1 * (Math.PI / 180)));
  if (Number.isNaN(vavg)) {
    vavg = E;
  }`;

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
    [sineamp, max_current],
    [input_voltage, xval],
    [gate1, xval],
    [gate2, xval],
    [load_voltage, xval],
    [load_current, xval],
    [thy1, xval],
    [thy2, xval],
    [dcvalue, xval],
  ];
}
