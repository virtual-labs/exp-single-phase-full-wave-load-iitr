var count = 0;
var correct_connections = [
  ["AC2L", "T1B"],
  ["AC2R", "R1T"],
  ["T3L", "AC2L"],
  ["G3T", "T3RT"],
  ["T3RB", "T2L"],

  ["VM3B", "T3RB"],
  ["T1L", "T4L"],
  ["T1RT", "G1T"],
  ["T4RT", "I1T"],
  ["T4RB", "VM5R"],
  ["T2RB", "VM8R"],
  ["T2RT", "G2T"],
  ["R1T", "VM3T"],
  ["VM3B", "I1B"],
  ["M4RT", "I1B"],
  ["I1B", "VM4T"],
  ["VM1T", "T1B"],
  ["VM1B", "T1L"],
  ["AC1L", "T1L"],
  ["VM4B", "GND1T"],
  ["M1L", "S1T"],
  ["M2L", "S2T"],
  ["M3L", "S2T"],
  ["VM4B", "GND3"],
  ["VM3T", "AC1L"],
  ["VM3B", "AC1R"],
  ["VM5L", "T4L"],
  ["T4RB", "VM5R"],
  ["VM6R", "I1T"],
  ["VM4B", "GND1T"],
  ["VM8R", "T2RB"],
  ["L1T", "R1B"],
  ["L1B", "DC1T"],
  ["DC1T", "VM9T"],
  ["DC1B", "VM7R"],
  ["DC1B", "VM9B"],
  ["VM7L", "R1T"],
  ["DC1B", "T2RB"],
  ["VM2T", "T3L"],
  ["VM2B", "T3RB"],
  ["VM8L", "T2L"],
  ["G1T", "VM4T"],
  ["GND2T", "VM6L"],
  ["T4RB", "T2RB"],
  ["AC1R", "T2L"],
];
var resistorids = ["R1-back"];
var dcids = ["DC1-back"];
var inductorids = ["L1-back"];
var acsourceids = ["AC1-back"];
var ammeterids = ["AC2-back"];
var groundids = [
  "GND1-back",
  "GND2-back",
  // "GND3-back",
  // "GND4-back",

  // "GND6-back",
  // "GND7-back",
].reverse();
var voltagemids = [
  "VM9-back",
  "VM8-back",
  "VM7-back",
  "VM6-back",
  "VM5-back",
  "VM4-back",
  "VM3-back",
  "VM2-back",
  "VM1-back",
];
var thyristorids = ["T4-back", "T3-back", "T2-back", "T1-back"];
// var opampids = ["opamp1-back"];
// var switchids = ["S2-back", "S1-back"];
var gatepulseids = ["G1-back", "G2-back", "G3-back", "I1-back"];
var dcsourceids = ["DC1-back"];
var values = {
  R1: {
    name: "Resistor",
    value: 0,
    type: "Resistance: ",
    unit: " Ω",
  },

  L1: {
    name: "Inductor",
    value: 0,
    type: "Resistance: ",
    unit: " mH",
  },
  C1: {
    name: "C1",
    value: 0,
    type: "Capacitance: ",
    unit: "uF",
  },
  C2: {
    name: "C2",
    value: 0,
    type: "Capacitance: ",
    unit: "uF",
  },
  I1: {
    name: "Gate Pulse 4",
    freq: 0,
    type1: "Fire angle: ",
    fire: 0,
    type2: "Fire Angle: ",
    unitfreq: "\u00B0",
    unit: "\u00B0",
  },
  DC1: { name: "E", value: 0, type: "Voltage: ", unit: " V" },
  AC1: {
    name: "AC",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: "V",
  },
  AC2: {
    name: "Load Current",
    // volt: 0,
    // freq: 0,
    // type1: "Voltage: ",
    // type: "Frequency: ",
    // unitfreq: " Hz",
    // unit: " volt",
  },
  T1: {
    name: "Thyristor 1",
  },
  T2: {
    name: "Thyristor 2",
  },
  VM1: {
    name: "VT1",
  },
  VM2: {
    name: "VT3",
  },
  GND1: {
    name: "GND1",
  },
  GND2: {
    name: "GND2",
  },
  VM3: { name: "Input Voltage" },
  T3: { name: "Thyristor 3" },
  T4: { name: "Thyristor 4" },
  VM4: { name: "Gate Pulse" },
  G1: {
    name: "Gate Pulse 1",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0 ",
    unit: "\u00B0",
  },
  GND3: { name: "GND3" },
  GND4: { name: "GND4" },
  VM5: { name: "VT4" },
  VM6: { name: "VM7" },
  VM8: { name: "VT2" },
  G3: {
    name: "Gate Pulse 3",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0  ",
    unit: "\u00B0 ",
  },
  I4: {
    name: "Gate Pulse 4",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0  ",
    unit: "\u00B0 ",
  },
  G2: {
    name: "Gate Pulse 2",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0  ",
    unit: "\u00B0",
  },
  opamp1: { name: "Comparator" },
  VM6: { name: "Gate Pulse" },
  VM9: { name: "VDC" },
  GND5: { name: "GND5" },
  VM7: { name: "Load Voltage" },
  GND6: { name: "GND5" },
  GND7: { name: "GND6" },
  vavg: 0,
  iavg: 0,
  vrms: 0,
};
var endpoints = {};
var user_connection = [];
var wrong_connection = [];
var endpoints_display = [];
var correct_connections_flag = false;

var instance = jsPlumb.getInstance({
  ConnectionsDetachable: false,
  Container: "body",
});
instance.bind("ready", () => {
  $("#symbolpalette .ele-img").draggable({
    helper: "clone",
    containment: "body",
    appendTo: "#diagram",
  });
  $("#diagram").droppable({
    drop: (event, ui) => {
      if ($(ui.helper).hasClass("resistor-sym")) {
        var a = resistorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gatepulse-sym")) {
        var a = gatepulseids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("thy-sym")) {
        var a = thyristorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ac-sym")) {
        var a = acsourceids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("nom-sym")) {
        var a = mosfetids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("dc-sym")) {
        var a = dcsourceids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("swi-sym")) {
        var a = switchids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("not-sym")) {
        var a = notgateids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("volt-sym")) {
        var a = voltagemids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gnd-sym")) {
        var a = groundids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ind-sym")) {
        var a = inductorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("dc-sym")) {
        var a = dcids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("op-sym")) {
        var a = opampids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
      if ($(ui.helper).hasClass("amm-sym")) {
        var a = ammeterids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
    },
  });
  //if (component.hasClass("jtk-connector"))
  function createParticularEnd(element_name) {
    var stokwid = "3.5";

    // Ammeter connections

    if (element_name == "AC2") {
      var AC2L = instance.addEndpoint("AC2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC2R = instance.addEndpoint("AC2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC2L"] = AC2L;
      endpoints["AC2R"] = AC2R;
    }

    // var gnd = {
    //   endpoint: "Dot",
    //   anchor: ["Top"],
    //   isSource: true,
    //   isTarget: true,
    //   connector: "Flowchart",
    //   maxConnections: 1,
    //   connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
    //   paintStyle: { fillStyle: "red" },
    // };

    // Thyristor connections
    if (element_name == "T1") {
      var T1RT = instance.addEndpoint("T1RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1RT"] = T1RT;
      var T1L = instance.addEndpoint("T1L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1L"] = T1L;
      var T1B = instance.addEndpoint("T1B", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1B"] = T1B;
    }
    if (element_name == "T2") {
      var T2RT = instance.addEndpoint("T2RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2RT"] = T2RT;
      var T2RB = instance.addEndpoint("T2RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2RB"] = T2RB;
      var T2L = instance.addEndpoint("T2L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [80, 1] }],
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2L"] = T2L;
    }
    if (element_name == "T3") {
      var T3RT = instance.addEndpoint("T3RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T3RB = instance.addEndpoint("T3RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var T3L = instance.addEndpoint("T3L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T3L"] = T3L;
      endpoints["T3RT"] = T3RT;
      endpoints["T3RB"] = T3RB;
    }
    if (element_name == "T4") {
      var T4RT = instance.addEndpoint("T4RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T4RB = instance.addEndpoint("T4RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T4L = instance.addEndpoint("T4L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T4L"] = T4L;
      endpoints["T4RT"] = T4RT;
      endpoints["T4RB"] = T4RB;
    }
    // Voltmeter connections
    if (element_name == "VM1") {
      var VM1T = instance.addEndpoint("VM1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM1B = instance.addEndpoint("VM1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1T"] = VM1T;
      endpoints["VM1B"] = VM1B;
    }
    if (element_name == "VM2") {
      var VM2T = instance.addEndpoint("VM2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM2B = instance.addEndpoint("VM2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2T"] = VM2T;
      endpoints["VM2B"] = VM2B;
    }
    if (element_name == "VM3") {
      var VM3T = instance.addEndpoint("VM3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [74, 74], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM3B = instance.addEndpoint("VM3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [1, 59], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3T"] = VM3T;
      endpoints["VM3B"] = VM3B;
    }
    if (element_name == "VM4") {
      var VM4T = instance.addEndpoint("VM4T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM4B = instance.addEndpoint("VM4B", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4T"] = VM4T;
      endpoints["VM4B"] = VM4B;
    }
    if (element_name == "VM5") {
      var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [8, 8] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5L"] = VM5L;
      endpoints["VM5R"] = VM5R;
    }
    if (element_name == "VM6") {
      var VM6L = instance.addEndpoint("VM6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM6R = instance.addEndpoint("VM6R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6L"] = VM6L;
      endpoints["VM6R"] = VM6R;
    }
    if (element_name == "VM7") {
      var VM7L = instance.addEndpoint("VM7L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM7R = instance.addEndpoint("VM7R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM7L"] = VM7L;
      endpoints["VM7R"] = VM7R;
    }
    if (element_name == "VM8") {
      var VM8L = instance.addEndpoint("VM8L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM8R = instance.addEndpoint("VM8R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM8L"] = VM8L;
      endpoints["VM8R"] = VM8R;
    }
    // Ground connections
    if (element_name == "GND1") {
      var GND1 = instance.addEndpoint("GND1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1;
    }
    if (element_name == "GND2") {
      var GND2 = instance.addEndpoint("GND2T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      endpoints["GND2T"] = GND2;
    }
    // AC connections
    if (element_name == "AC1") {
      var AC1L = instance.addEndpoint("AC1L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [74, 74] }],
        endpoint: "Dot",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var AC1R = instance.addEndpoint("AC1R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [1, 120] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1L"] = AC1L;
      endpoints["AC1R"] = AC1R;
    }
    // Gatepulse connections
    if (element_name == "G1") {
      var G1T = instance.addEndpoint("G1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      endpoints["G1T"] = G1T;
    }
    if (element_name == "G3") {
      var G3T = instance.addEndpoint("G3T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      endpoints["G3T"] = G3T;
    }
    if (element_name == "I1") {
      var I1T = instance.addEndpoint("I1T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1T"] = I1T;
    }
    if (element_name == "G2") {
      var G2T = instance.addEndpoint("G2T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      endpoints["G2T"] = G2T;
    }
    // Resistor connections
    if (element_name == "R1") {
      var R1T = instance.addEndpoint("R1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var R1B = instance.addEndpoint("R1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1T"] = R1T;
      endpoints["R1B"] = R1B;
    }
    if (element_name == "L1") {
      var L1T = instance.addEndpoint("L1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var L1B = instance.addEndpoint("L1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["L1T"] = L1T;
      endpoints["L1B"] = L1B;
    }
    if (element_name == "DC1") {
      var DC1T = instance.addEndpoint("DC1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;
      endpoints["DC1B"] = DC1B;
    }
    if (element_name == "VM9") {
      var VM9T = instance.addEndpoint("VM9T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var VM9B = instance.addEndpoint("VM9B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM9T"] = VM9T;
      endpoints["VM9B"] = VM9B;
    }
  }
  function createEnd() {
    var stokwid = "3.5";

    // Ammeter connections

    if (endpoints_display.indexOf("AC2") !== -1) {
      var AC2L = instance.addEndpoint("AC2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC2R = instance.addEndpoint("AC2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC2L"] = AC2L;
      endpoints["AC2R"] = AC2R;
    }

    // var gnd = {
    //   endpoint: "Dot",
    //   anchor: ["Top"],
    //   isSource: true,
    //   isTarget: true,
    //   connector: "Flowchart",
    //   maxConnections: 1,
    //   connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
    //   paintStyle: { fillStyle: "red" },
    // };

    // Thyristor connections
    if (endpoints_display.indexOf("T1") !== -1) {
      var T1RT = instance.addEndpoint("T1RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1RT"] = T1RT;
      var T1L = instance.addEndpoint("T1L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1L"] = T1L;
      var T1B = instance.addEndpoint("T1B", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T1B"] = T1B;
    }
    if (endpoints_display.indexOf("T2") !== -1) {
      var T2RT = instance.addEndpoint("T2RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2RT"] = T2RT;
      var T2RB = instance.addEndpoint("T2RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2RB"] = T2RB;
      var T2L = instance.addEndpoint("T2L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [80, 1] }],
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T2L"] = T2L;
    }
    if (endpoints_display.indexOf("T3") !== -1) {
      var T3RT = instance.addEndpoint("T3RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T3RB = instance.addEndpoint("T3RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var T3L = instance.addEndpoint("T3L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T3L"] = T3L;
      endpoints["T3RT"] = T3RT;
      endpoints["T3RB"] = T3RB;
    }
    if (endpoints_display.indexOf("T4") !== -1) {
      var T4RT = instance.addEndpoint("T4RT", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T4RB = instance.addEndpoint("T4RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var T4L = instance.addEndpoint("T4L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["T4L"] = T4L;
      endpoints["T4RT"] = T4RT;
      endpoints["T4RB"] = T4RB;
    }
    // Voltmeter connections
    if (endpoints_display.indexOf("VM1") !== -1) {
      var VM1T = instance.addEndpoint("VM1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM1B = instance.addEndpoint("VM1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1T"] = VM1T;
      endpoints["VM1B"] = VM1B;
    }
    if (endpoints_display.indexOf("VM2") !== -1) {
      var VM2T = instance.addEndpoint("VM2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM2B = instance.addEndpoint("VM2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2T"] = VM2T;
      endpoints["VM2B"] = VM2B;
    }
    if (endpoints_display.indexOf("VM3") !== -1) {
      var VM3T = instance.addEndpoint("VM3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [74, 74], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM3B = instance.addEndpoint("VM3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [1, 59], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3T"] = VM3T;
      endpoints["VM3B"] = VM3B;
    }
    if (endpoints_display.indexOf("VM4") !== -1) {
      var VM4T = instance.addEndpoint("VM4T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM4B = instance.addEndpoint("VM4B", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4T"] = VM4T;
      endpoints["VM4B"] = VM4B;
    }
    if (endpoints_display.indexOf("VM5") !== -1) {
      var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [8, 8] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5L"] = VM5L;
      endpoints["VM5R"] = VM5R;
    }
    if (endpoints_display.indexOf("VM6") !== -1) {
      var VM6L = instance.addEndpoint("VM6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM6R = instance.addEndpoint("VM6R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6L"] = VM6L;
      endpoints["VM6R"] = VM6R;
    }
    if (endpoints_display.indexOf("VM7") !== -1) {
      var VM7L = instance.addEndpoint("VM7L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM7R = instance.addEndpoint("VM7R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM7L"] = VM7L;
      endpoints["VM7R"] = VM7R;
    }
    if (endpoints_display.indexOf("VM8") !== -1) {
      var VM8L = instance.addEndpoint("VM8L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM8R = instance.addEndpoint("VM8R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [5, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM8L"] = VM8L;
      endpoints["VM8R"] = VM8R;
    }
    // Ground connections
    if (endpoints_display.indexOf("GND1") !== -1) {
      var GND1 = instance.addEndpoint("GND1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1;
    }
    if (endpoints_display.indexOf("GND2") !== -1) {
      var GND2 = instance.addEndpoint("GND2T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      endpoints["GND2T"] = GND2;
    }
    // AC connections
    if (endpoints_display.indexOf("AC1") !== -1) {
      var AC1L = instance.addEndpoint("AC1L", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [74, 74] }],
        endpoint: "Dot",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var AC1R = instance.addEndpoint("AC1R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [1, 120] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1L"] = AC1L;
      endpoints["AC1R"] = AC1R;
    }
    // Gatepulse connections
    if (endpoints_display.indexOf("G1") !== -1) {
      var G1T = instance.addEndpoint("G1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      endpoints["G1T"] = G1T;
    }
    if (endpoints_display.indexOf("G3") !== -1) {
      var G3T = instance.addEndpoint("G3T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      endpoints["G3T"] = G3T;
    }
    if (endpoints_display.indexOf("I1") !== -1) {
      var I1T = instance.addEndpoint("I1T", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1T"] = I1T;
    }
    if (endpoints_display.indexOf("G2") !== -1) {
      var G2T = instance.addEndpoint("G2T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      endpoints["G2T"] = G2T;
    }
    // Resistor connections
    if (endpoints_display.indexOf("R1") !== -1) {
      var R1T = instance.addEndpoint("R1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var R1B = instance.addEndpoint("R1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1T"] = R1T;
      endpoints["R1B"] = R1B;
    }
    if (endpoints_display.indexOf("L1") !== -1) {
      var L1T = instance.addEndpoint("L1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var L1B = instance.addEndpoint("L1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["L1T"] = L1T;
      endpoints["L1B"] = L1B;
    }
    if (endpoints_display.indexOf("DC1") !== -1) {
      var DC1T = instance.addEndpoint("DC1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;
      endpoints["DC1B"] = DC1B;
    }
    if (endpoints_display.indexOf("VM9") !== -1) {
      var VM9T = instance.addEndpoint("VM9T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var VM9B = instance.addEndpoint("VM9B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM9T"] = VM9T;
      endpoints["VM9B"] = VM9B;
    }
  }
  window.addEventListener("resize", () => {
    instance.repaintEverything();
    if (correct_connections_flag) {
      plotData();
    }
  });

  instance.bind("connection", (conn, event) => {
    var flag = true;
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        flag = false;

        user_connection.push(eg1);

        break;
      }
    }
    if (flag) {
      conn.connection._jsPlumb.paintStyleInUse.stroke = "red";
      wrong_connection.push(eg1);
      openPopup("new-img/404-error.png", "Wrong Connection", "28px");
    }
  });

  instance.bind("click", function (conn) {
    let eg1 = [String(conn.sourceId), String(conn.targetId)];
    if (!correct_connections_flag) {
      for (var ele of correct_connections) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          user_connection.pop(eg1);
          break;
        }
      }
      for (var ele of wrong_connection) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          wrong_connection.pop(eg1);
          break;
        }
      }
      instance.deleteConnection(conn);
    }
    return false;
  });
  $("body").on("contextmenu", "#components", (event) => {
    event.preventDefault();
  });
  // context menu for resistor
  $("body").on("contextmenu", "#diagram .resistor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' Ω" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Ω" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    //context menu for capacitor

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .inductor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //context menu for thyristor
  $("body").on("contextmenu", "#diagram .thyristor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" ><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="4" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          // '">Thyristor:</label><input type="number" class="set-input" placeholder="  ' +
          // values[window.selectedControl]["value"] +
          // ' uF" min="1" max="50"  id="value-' +

          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" ><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="4"  class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;" class="set-input" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          // '">Thyristor:</label><input type="number" class="set-input" placeholder="  ' +
          // values[window.selectedControl]["value"] +
          // ' uF" min="1" max="50" disabled  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepulse1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 160px;"  maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="1" max="180"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="1" max="180" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;     width: 160px;" maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0" min="0" max="180" disabled id="value-freq-' +
          window.selectedControl +
          "'" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="180" style="    position: relative;left: 6px;" disabled id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  // contextmenu for gatepulse
  $("body").on("contextmenu", "#diagram .gatepulse", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 160px;"  maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="1" max="360"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="1" max="360" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;     width: 160px;" maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0" min="0" max="180" disabled id="value-freq-' +
          window.selectedControl +
          "'" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="180" style="    position: relative;left: 6px;" disabled id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //AC Source
  $("body").on("contextmenu", "#diagram .acsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;" maxlength="5"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="10" max="350"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;" maxlength="5"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="400" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="0" max="60" disabled id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .acsource1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="50"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;     height: 24px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input"  placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="50" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60" disabled  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit" class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //dc source
  $("body").on("contextmenu", "#diagram .dcsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    var val = values[window.selectedControl]["value"];
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="javascript:void(0);" onsubmit="DcSubmitednew(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" class="set-input" style="width: 105px;" placeholder="  ' +
          val +
          ' Volt" min="0" max="300"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit" class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="javascript:void(0);" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" placeholder="  ' +
          val +
          ' Volt" min="1" max="300" style="width: 105px;" disabled class="set-input" id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .other", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text"  id="name-' +
        window.selectedControl +
        '" class="set-input-name" maxlength="4" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .ground1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text" maxlength="6" id="name-' +
        window.selectedControl +
        '" class="set-input-name" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
});

function changeName(name, value) {
  values[name]["name"] = value.toUpperCase();
  var ele = name + "-name";
  $("#" + ele).text(values[name]["name"]);
  if (correct_connections_flag) {
    plotData();
  }
}
function dcSubmited(name) {
  var a = parseInt(document.getElementById("value-freq-" + name).value);
  var fire = parseInt(document.getElementById("value-fire-" + name).value);
  var ele;
  if (!Number.isNaN(a) && !Number.isNaN(fire)) {
    if (a >= fire) {
      openPopup(
        "new-img/404-warning.png",
        "Firing angle should be in increasing order",
        "22px"
      );
    } else {
      new_reading = true;
      values[name]["fire"] = fire;
      ele = name + "-fire";
      $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["fire"] = fire;
        $("#value-fire-" + connectedGatePulse).val(fire);
        $("#" + connectedGatePulse + "-fire").text(
          values[connectedGatePulse]["fire"] +
            values[connectedGatePulse]["unit"]
        );
      }
      values[name]["freq"] = a;
      ele = name + "-freq";
      $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["freq"] = a;
        $("#value-freq-" + connectedGatePulse).val(a);
        $("#" + connectedGatePulse + "-freq").text(
          values[connectedGatePulse]["freq"] +
            values[connectedGatePulse]["unitfreq"]
        );
      }
    }
  } else {
    if (!Number.isNaN(fire)) {
      if (values[name]["freq"] == 0) {
        openPopup("new-img/404-warning.png", "Starting angle is Empty", "28px");
      } else if (fire <= values[name]["freq"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          "22px"
        );
      } else {
        new_reading = true;
        values[name]["fire"] = fire;
        ele = name + "-fire";
        $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["fire"] = fire;
          $("#value-fire-" + connectedGatePulse).val(fire);
          $("#" + connectedGatePulse + "-fire").text(
            values[connectedGatePulse]["fire"] +
              values[connectedGatePulse]["unit"]
          );
        }
      }
    }

    if (!Number.isNaN(a)) {
      if (values[name]["fire"] == 0) {
        openPopup("new-img/404-warning.png", "Ending angle is Empty", "28px");
      } else if (a >= values[name]["fire"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          "22px"
        );
      } else {
        new_reading = true;
        values[name]["freq"] = a;
        ele = name + "-freq";
        $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["freq"] = a;
          $("#value-freq-" + connectedGatePulse).val(a);
          $("#" + connectedGatePulse + "-freq").text(
            values[connectedGatePulse]["freq"] +
              values[connectedGatePulse]["unitfreq"]
          );
        }
      }
    }
  }

  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}

function getConnectedGatePulse(name) {
  var connectedPairs = [
    ["I1", "G3"],
    ["G2", "G1"],
  ];

  // the connected pair that contains the given gate pulse name
  var connectedPair = connectedPairs.find((pair) => pair.includes(name));

  if (connectedPair) {
    var connectedGatePulse = connectedPair.find(
      (gatePulse) => gatePulse !== name
    );
    return connectedGatePulse;
  }

  return null;
}

function acSubmited(name) {
  var volt = document.getElementById("value-volt-" + name).value;
  var ele;
  if (volt != "") {
    if (parseInt(volt) <= values["DC1"]["value"]) {
      openPopup(
        "new-img/404-warning.png",
        "AC voltage can't be less than DC voltage",
        "23px"
      );
    } else {
      values[name]["volt"] = volt;
      ele = name + "-volt";
      new_reading = true;
      $("#" + ele).text(values[name]["volt"] + values[name]["unit"]);
    }
  }
  var freq = document.getElementById("value-freq-" + name).value;
  if (freq != "") {
    values[name]["freq"] = freq;
    ele = name + "-freq";
    new_reading = true;
    $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function DcSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    new_reading = true;
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function DcSubmitednew(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    if (parseInt(a) >= values["AC1"]["volt"]) {
      openPopup(
        "new-img/404-warning.png",
        "DC voltage can't be greater than AC voltage",
        "21px"
      );
    } else {
      values[name]["value"] = a;
      var ele = name + "-value";
      new_reading = true;
      $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
    }
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function instchange() {
  document.getElementById("inst").classList.toggle("inst-display");
}

$(document).ready(function () {
  $("#data").on("click", function () {
    $("#readings").show();
  });
});
document.getElementById("check1").addEventListener("click", () => {
  if (wrong_connection.length == 0) {
    if (user_connection.length < 33) {
      openPopup(
        "new-img/404-warning.png",
        "Please make all the connections",
        "28px"
      );
    } else {
      openPopup(
        "new-img/404-tick.png",
        "Well Done! All Connections are Connected",
        "23px"
      );

      correct_connections_flag = true;
    }
  } else {
    openPopup(
      "new-img/404-warning.png",
      "Wrong connection present in the circuit",
      "23px"
    );
  }
});
var count = 1;
var new_reading = true;
function showreadings() {
  if (correct_connections_flag) {
    if (
      values["AC1"]["volt"] != 0 &&
      values["AC1"]["freq"] != 0 &&
      values["R1"]["value"] != 0 &&
      values["L1"]["value"] != 0 &&
      values["G1"]["fire"] != 0 &&
      values["G2"]["fire"] != 0 &&
      values["G3"]["fire"] != 0 &&
      values["DC1"]["value"] != 0 &&
      values["I1"]["fire"] != 0
    ) {
      if (new_reading) {
        if (count < 11) {
          document.getElementById("Taken_reading").style.display = "block";
          var a = document.getElementById("tab");
          var b = a.innerHTML;
          var str = `<tr><td>${count}</td><td>${values["vrms"]}</td><td>${values["irms"]}</td><td>${values["vavg"]}</td><td>${values["iavg"]}</td></tr>`;
          a.innerHTML = b + str;
          count = count + 1;
          new_reading = false;
        } else {
          openPopup(
            "new-img/404-warning.png",
            "You can only add 10 readings in the table",
            "22px"
          );
        }
      }
    }
  }
}
