
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">

### **Introduction**

A controlled rectifier is an electronic circuit that converts alternating current (AC) into direct current
          (DC). It consists of power electronic devices, typically thyristors or silicon-controlled rectifiers (SCRs),
          which are controlled to switch the flow of current in a desired manner.
          The main function of a controlled rectifier is to control the magnitude and polarity of the output DC voltage.
          It is commonly used in various applications where precise control over the rectification process is required
          such as power supplies, motor drives, battery chargers, and voltage regulators.<br><br>
          The controlled rectifier operates by using a triggering mechanism to turn on the thyristors at specific points
          in the AC waveform. Once the thyristors are triggered, they conduct current until the AC voltage crosses zero
          or until the thyristor is turned off. By controlling the timing of thyristor firing, the rectifier can vary
          the average DC voltage output.<br>

### **Single Phase Full Wave Controlled Bridge Rectifier**

A single-phase controlled bridge rectifier converts alternating current (AC) input into a direct current (DC)
output using a bridge configuration of thyristors (SCRs). It provides full-wave rectification and allows for control over the output voltage. Here's how a single-phase controlled bridge rectifier works:<br>

**1. Bridge Configuration:** The bridge rectifier consists of four thyristors connected in a bridge configuration,
    along with a load resistor and a DC output terminal. The AC input voltage is connected across the two opposite
    corners of the bridge, while the load resistor and the DC output terminal are connected across the other two
    corners.<br>

**2. Triggering Control:** The thyristors are triggered in a controlled manner using gate pulses to determine
            their conduction timing. The thyristors are triggered in pairs, with one thyristor from each pair conducting
            in alternate half-cycles of the input voltage.<br>

**3. Operation:** During the positive half-cycle of the input voltage, the thyristors on the positive side of the
            bridge (top two thyristors in the bridge configuration) are triggered to conduct. This allows the positive
            half of the input voltage to appear across the load resistor and the DC output terminal.<br>

**4. Voltage Polarity Reversal:** During the negative half-cycle of the input voltage, the thyristors on the
            negative side of the bridge (bottom two thyristors in the bridge configuration) are triggered to conduct. This
            allows the negative half of the input voltage to appear across the load resistor and the DC output terminal,
            effectively reversing the polarity of the output voltage.<br>

By controlling the timing of thyristor triggering, the average DC output voltage can be varied. The output of
            a single-phase controlled bridge rectifier is a pulsating DC voltage with ripples. Additional filtering
            components like capacitors or inductors can be employed to reduce the ripples and obtain a smoother DC
            output.<br>

Single-phase controlled bridge rectifiers are commonly used in various applications, including AC motor speed
            control, uninterruptible power supplies (UPS), battery charging systems, and DC power supplies requiring
            variable output voltage control.<br><br>
            It's important to note that practical implementations of single-phase controlled bridge rectifiers require
            additional circuitry for triggering control, protection, and snubber circuits to ensure safe and efficient
            operation.<br>

### **1. Single Phase Full Wave Controlled Rectifier - R Load**<br>
<center><img src="images\R load circuit.png" alt="R load circuit" height="250" style="-webkit-filter:contrast(120%);"></center>
<center><b>Fig. 1 Single Phase Full Wave SCR with R Load</b></center><br>

<center><img src="images\R load waveform.png" alt="Input waveform" height="400" width="400" style="-webkit-filter:contrast(110%);"></center>
<center><b>Fig. 2 Waveforms of Single Phase Full Wave SCR with R Load </b></center><br>

A fully controlled full-wave bridge rectifier is shown in Fig. 1. All the four devices used in the circuit are
          thyristors T1-T4 for control of output power. In this circuit, diagonally opposite pair of thyristors are made
          to conduct, and are commutated simultaneously. During the first positive half cycle, thyristors T1 and T2
          are forward biased and if they are triggered simultaneously, the current flows through the load via thyristor
          T1­-load-T2-source. Thus, during positive half cycle, thyristors T1 and T2 are conducting. During the negative
          half cycle of the ac input, thyristors T3 and T4 are forward biased and if they are triggered simultaneously,
          the current flows through the load via thyristor T3-load-T4-source. Thyristors T1, T3 and T2, T4 are triggered
          at the same firing angle α in each positive and negative half cycles of the supply voltage respectively. When
          the supply voltage falls to zero, the current also becomes zero. Thus thyristors T1, T2 in positive half cycle
          and T3 and T4 in negative half cycle turn off by natural commutation. The related voltage and current
          waveforms for this circuit are shown in Fig. 2.<br>
          
The average of the waveform is determined by the following expression,<br>

<center>

$V_{o} = \frac {1}{\pi} \int_{\alpha}^{\pi} V_{m} \sin(⁡wt) d(wt) = \frac {V_{m}}{\pi} ( 1 + cos⁡\alpha ) .......(1)$

</center>

Average output current,<br>

<center>

$I_{o} = \frac {V_{o}}{R} = \frac {V_{m}}{\pi R} ( 1+ \cos⁡\alpha) .......(2)$

</center>

Power in the resistance,<br>

<center>

$P = I_{rms}^2*R.......(3)$<br>

</center>

Where,

<center>

$I_{rms} = \frac {V_{m}}{R} \sqrt{\frac {1}{2} - \frac {\alpha}{2\pi} + \sin⁡\left(\frac {2\alpha}{4\pi}\right)}.......(4)$

</center>

<center>

$V_{rms} = V_{m} \sqrt{\frac {1}{2} - \frac {\alpha}{2\pi} + \sin⁡\left(\frac {2\alpha}{4\pi}\right)}.......(5)$

</center>

### **2. Single Phase Full Wave Controlled Rectifier - RL Load**

The current with RL load does not increase or decrease suddenly. So the waveform between the output current
          and the output voltage is different. And the output current will tend to increase after each cycle. If the
          inductance of the load is large enough, the output current is continuous.<br><br>
          When the SCR changes from the conductive state to the off state, the load will generate energy to maintain
          that SCR continue to conduct. Therefore, after the polarity of the voltage is reversed and there is no control
          pulse, then the output voltage V<sub>o</sub> < 0.

<center><img src="images\RL load circuit.png" alt="1 phase controlled bridge rectifier" height="200" style="-webkit-filter:contrast(120%);"></center>
<center><b>Fig. 3 Single Phase Full Wave SCR with RL Load</b></center><br>

<center><img src="images\RL load waveform.png" alt="Input waveform" height="400" width="400" style="-webkit-filter:contrast(150%);"></center>
<center><b>Fig. 4 Waveforms of Single Phase Full Wave SCR with RL Load </b></center><br>

At firing angle α = 60°, thyristors TH1 and TH3 are triggered. Supply voltage from this instant appears across
          the output terminals and forces the current through the load. The load current I<sub>dc</sub> is assumed to be constant.
          This current also flows through the supply and the direction is from line to neutral, which is taken positive
          as shown in Fig. 4 along with the applied voltage. At instant π, the supply voltage reverses but because of
          very large inductance L, the current keeps flowing in the same direction at constant magnitude I<sub>dc</sub>. Thus the
          thyristors TH1 and TH3 remain in conducting state and therefore, the negative supply voltage appears across
          the output terminals. At an angle π + α, thyristors TH2 and TH4 are triggered. With this, negative supply
          voltage reverse biases thyristor TH1 through thyristor TH2 and thyristor TH3 through thyristor TH4 of
          commutating thyristor TH1 and TH3. The current continues flowing in every half cycle and output voltage is
          obtained as depicted in the figure. As illustrated the current is positive when TH1 and TH3 are conducting and
          negative when TH2 and TH4 are conducting.<br><br>
          Current function,

<center>          

$i_{o(wt)} = \frac {V_m}{Z}( sin⁡(wt-θ)- sin⁡(\alpha-θ)e^{ \frac {-(wt-\alpha)}{wτ}}).......(6)$

</center>

Solving for $\alpha$,

<center>   

$\alpha ≤ θ$

</center>

<center>   

$θ= \tan^{-1}⁡(\frac {wL}{R}) .......(7)$

</center>

<center>   

$\alpha ≤ \tan^{-1}⁡(\frac {wL}{R}) .......(8)$

</center>

The dc(average value) is,<br>

<center>   

$V_{o} = \frac {1}{\pi} \int_{\alpha}^{\alpha+\pi} V_{m} \sin{(wt)} d(wt) = \frac {2V_{m}}{\pi} \cos⁡ {\alpha} .......(9)$

</center>

<center>   

$I_{o} = \frac {1}{\pi R} \int_{\alpha}^{\alpha+\pi} V_{m} \sin{(wt)} d(wt) = \frac {2V_{m}}{\pi R} \cos⁡ {\alpha} .......(10)$

</center>

The amplitude of ac terms are calculated from,<br>

<center>   

$V_{n} = \sqrt {a_{n}^2 + b_{n}^2} .......(11)$

</center>

<center>   

$a_{n} = \frac {2V_{m}}{\pi}\left[\frac {cos⁡(n+1)\alpha}{n+1} - \frac {cos⁡(n-1)\alpha}{n-1}\right].......(12)$

</center>

<center>   

$b_{n} = \frac {2V_{m}}{\pi}\left[\frac {sin⁡(n+1)\alpha}{n+1} - \frac {sin⁡(n-1)\alpha}{n-1}\right].......(13)$

</center>

<center>   

$I_{rms} = \sqrt {I_o^2+ ∑_{n=2,4,6…}^{∞} \left(\frac {I_{n}^2}{\sqrt 2}\right)^2 } .......(14)$

</center>

### 3. Single Phase Full Wave Controlled Rectifier - RLE Load

<center><img src="images\RLE load circuit.png" alt="1 phase controlled bridge rectifier" height="225" style="-webkit-filter:contrast(120%);"></center>
<center><b>Fig. 5 Single Phase Full Wave SCR with RLE Load</b></center>

<center><img src="images\RLE load waveform.png" alt="Input waveform" height="750" width="500" style="-webkit-filter:contrast(150%);"></center>
<center><b>Fig. 6 Waveforms of Single Phase Full Wave SCR with RLE Load </b></center><br>

The circuit arrangement of a Single Phase Full Wave Controlled Rectifier with RLE load is shown in Fig. 5.
          During positive half cycle, thyristors TH1 and TH3 are forward biased and start conducting at ωt = α. The load
          current flows through TH1, motor and TH3. At ωt = π, the supply voltages reverses. Because of inductance L
          thyristors TH1 and TH3 continue to conduct beyond ωt = π. From ωt = π to ωt = 2π, thyristors TH3 and TH4 are
          forward biased. When TH2 and TH4 are triggered at ωt = π + α, thyristors TH1 and TH3 are subjected to reverse
          bias and are turned off by natural commutation. Load current is transferred from TH1 and TH3 to TH2 and TH4.
          This mode of operation continues till TH1 and TH3 are triggered in the next positive half cycle. Load Current
          tend to almost constant due to high L/R ratio.<br><br>
          When we use a load with components R, L, E, the output waveform of the circuit is drawn as shown in the above Fig. 6. If the SCR is conducting, the output waveform is the same as that of the RL load rectifier circuit.
          When no SCR is conducting (I<sub>o</sub> = 0) the output voltage is equal to E (V<sub>o</sub> = V<sub>dc</sub>).<br>


For conduction,<br> 

<center>   

$\alpha ≥ \sin^{-1}\left(\frac {V_{dc}}{V_{m}}\right) .......(15)$

</center>

The average bridge output voltage is,<br>

<center>   

$V_{o} = \frac {2V_m}{\pi} \cos⁡\alpha.......(16)$

</center>

The average load current is,<br>

<center>

$I_{o} = \frac {2V_{m} \cos⁡\alpha}{\pi R} - \frac {V_{dc}}{R} .......(17)$

</center>

The expression for the $V_{rms}$ and $I_{rms}$ are,<br>

<center>

$V_{rms} = V_{max} \sqrt{\frac {\pi-\alpha}{2\pi} + \frac {\sin 2\alpha}{4\pi}}.......(18)$

</center>

<center>

$I_{rms} = \frac {V_{max}}{R} \sqrt{\frac {\pi-\alpha}{2\pi} + \frac {\sin 2\alpha}{4\pi}}.......(19)$

</center>

Power absorbed by dc voltage is,<br>

<center>

$P_{dc} = I_{o} * V_{dc } .......(20)$

</center>

### **Advantages of Single Phase Full Wave SCR**

1. The single-phase controlled full-wave rectifier offers relatively high efficiency in converting AC to DC
power. This is because it utilizes both halves of the input AC waveform, ensuring better utilization of
power.<br>

2. Compared to half-wave rectifiers, the full-wave rectifier provides a smoother output waveform. It reduces
          the ripple content in the DC output, resulting in a more stable and constant DC voltage.<br>

3. The full-wave rectifier configuration can provide a higher average DC output voltage compared to a
          half-wave rectifier. This is due to the utilization of both positive and negative halves of the input AC
          waveform.<br>

4. By using controlled switching devices like thyristors, the rectification process can be controlled,
          allowing for adjustable output voltage and power control. This feature is particularly useful in applications
          that require variable voltage or power levels.<br>

### **Disadvantages of Single Phase Full Wave SCR**

1. The single-phase controlled full-wave rectifier is more complex compared to a half-wave rectifier. It
          requires additional components like thyristors, triggering circuits, and gate control circuits. This
          complexity increases the cost and can make the circuit more susceptible to faults.<br>

2. The use of controlled switching devices can introduce harmonic distortion in the output waveform. These
          harmonic components can cause interference in other electrical equipment connected to the same power supply,
          leading to performance issues or malfunctions.<br>

3. The additional components required for control and switching increase the overall cost of the rectifier
          circuit. The cost of thyristors and their associated control circuits can be significant compared to simple
          diodes used in half-wave rectifiers.<br>

4. The introduction of thyristors or other controlled switching devices adds complexity and potential points
          of failure in the circuit. This can reduce the overall reliability of the rectifier compared to simpler
          rectifier configurations.<br>

### **Applications of Single Phase Full Wave SCR**

1. Single-phase full-wave controlled rectifiers are commonly used in power supplies for electronic devices and
          equipment. They convert AC voltage from the mains power supply to a regulated DC voltage suitable for powering
          electronic circuits.<br>

2. Single-phase full-wave controlled rectifiers are used in motor drive systems to convert AC power into DC
          power to drive DC motors. By controlling the firing angle of the rectifier, the speed and torque of the motor
          can be regulated.<br>

3. Single-phase full-wave controlled rectifiers are employed in battery charging systems to convert AC power
          to DC power for charging batteries. The firing angle control allows for regulating the charging current and
          voltage to prevent overcharging and optimize the charging process.<br>

4. Electroplating processes often require a controlled DC power supply. Single-phase full-wave controlled
          rectifiers can be used to provide the required DC voltage and current for electroplating applications.<br>

5. Single-phase full-wave controlled rectifiers are utilized in welding machines to convert AC power to DC
          power for welding operations. They provide a stable and controlled DC current necessary for welding
          applications.<br>

6. In some UPS systems, single-phase full-wave controlled rectifiers are used to rectify the incoming AC power
          and charge the backup batteries. This ensures a continuous supply of power in the event of a power
          outage.<br>

7. Single-phase full-wave controlled rectifiers, in conjunction with additional power electronic devices such
          as thyristors or transistors, are employed in variable speed drives to control the speed of AC motors. The
          rectifier section converts AC power to DC power, which is further processed to generate variable-frequency AC
          power to drive the motor at different speeds.<br>


</div>