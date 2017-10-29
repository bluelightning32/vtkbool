var pts = 'M251.388,333.071 L231.288,314.799 L213.929,376.469 L191.545,361.394 L149.518,381.494 L128.047,335.355 L161.395,273.228 L129.61,279.122 L95.1565,321.139 L69.1061,361.475 L68.2657,414.416 L74.9884,469.879 L99.3582,520.299 L145.577,583.324 L204.4,625.341 L270.787,655.593 L333.812,692.568 L396.837,756.433 L440.535,812.736 L462.197,814.752 L479.865,765.39 L433.821,738.594 L478.386,686.938 L529.835,715.973 L551.357,774.002 L525.94,821.372 L462.197,814.752 L440.535,812.736 L503.56,852.231 L601.039,859.795 L584.446,849.178 L561.189,804.602 L622.24,769.393 L621.917,828.505 L584.446,849.178 L601.039,859.795 L662.383,844.669 L675.829,804.332 L669.106,744.669 L669.946,688.366 L647.257,637.946 L637.173,569.879 L620.367,498.45 L602.72,430.383 L585.072,369.038 L572.467,323.66 L530.451,269.879 L474.988,218.618 L439.694,192.568 L380.871,193.408 L331.291,195.929 L272.467,194.248 L205.241,210.215 L159.862,232.904 L129.61,279.122 L161.395,273.228 L205.249,284.192 L231.288,314.799 L251.388,333.071 L263.722,262.265 L301.181,225.262 L371.531,303.835 L398.94,297.44 L365.592,243.535 L421.781,219.781 L459.697,307.033 L442.338,331.244 L427.719,304.292 L366.963,342.664 L398.94,297.44 L371.531,303.835 L303.465,303.835 L251.388,333.071 L257.327,367.333 L303.008,365.962 L307.577,408.903 L293.872,474.228 L218.04,416.669 L257.327,367.333 Z'; var polys = {"0":"M251.388,333.071 L257.332,367.332 L218.04,416.669 L150.234,586.65 L145.577,583.324 L99.3582,520.299 L95.9204,513.186 L213.929,376.469 L231.281,314.807 Z","1":"M231.288,314.799 L251.385,333.075 L257.307,367.342 L218.04,416.669 L192.051,616.52 L154.008,589.346 Z","10":"M68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L129.599,279.117 L161.326,273.182 L128.047,335.355 L149.518,381.494 L194.392,363.311 L213.929,376.469 L256.965,365.257 L257.321,367.312 L218.04,416.669 L293.872,474.228 L636.01,564.933 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.756,803.685 L622.24,769.393 L616.589,772.652 L529.835,715.973 L478.386,686.938 L433.821,738.594 L476.071,776.062 L462.381,814.57 L451.799,813.644 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 Z","11":"M74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L129.559,279.108 L151.871,274.954 L128.047,335.355 L149.518,381.494 L191.545,361.394 L213.929,376.469 L254.243,349.366 L257.339,367.355 L218.04,416.669 L293.872,474.228 L615.745,480.623 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L674.491,792.457 L478.386,686.938 L433.821,738.594 L477.689,771.445 L465.358,805.748 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 Z","12":"M99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L129.569,279.117 L136.986,277.735 L128.047,335.355 L149.518,381.494 L191.545,361.394 L213.929,376.469 L249.709,331.552 L251.312,333.009 L257.346,367.353 L218.04,416.669 L293.872,474.228 L594.827,402.946 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L672.202,772.149 L478.386,686.938 L433.821,738.594 L478.918,768.028 L470.07,792.686 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 Z","13":"M145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L124.513,285.354 L128.047,335.355 L149.518,381.494 L191.545,361.394 L213.929,376.469 L233.595,316.952 L251.285,333.028 L252.189,338.133 L218.04,416.669 L293.872,474.228 L545.486,289.123 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L669.298,746.375 L478.386,686.938 L433.821,738.594 L479.865,765.39 L476.641,774.408 L270.787,655.593 L204.4,625.341 Z","14":"M204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L117.236,294.293 L128.047,335.355 L149.518,381.494 L191.545,361.394 L213.929,376.469 L222.695,345.466 L218.04,416.669 L293.872,474.228 L374.639,337.816 L427.719,304.292 L442.338,331.244 L508.442,249.537 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.327,729.865 L478.386,686.938 L439.213,732.344 Z","15":"M270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L112.377,300.199 L128.047,335.355 L149.518,381.494 L191.545,361.394 L208.334,372.701 L218.04,416.669 L293.872,474.228 L307.577,408.903 L323.247,303.825 L371.417,303.802 L379.48,301.938 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L496.726,238.709 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.537,715.799 L478.386,686.938 L433.821,738.594 L479.865,765.39 L476.055,776.017 Z","16":"M333.812,692.568 L144.048,581.24 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L105.969,307.987 L149.518,381.494 L191.545,361.394 L196.147,364.493 L218.04,416.669 L293.872,474.228 L307.577,408.903 L298.136,306.827 L303.465,303.835 L370.642,303.831 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L485.418,228.258 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L666.016,679.632 L478.386,686.938 L433.821,738.594 L479.865,765.39 L462.155,814.796 L453.651,814.005 Z","17":"M396.837,756.433 L69.5183,424.75 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L103.22,311.305 L149.518,381.494 L189.474,362.384 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L289.906,311.436 L303.465,303.835 L364.158,303.824 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L472.337,216.661 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L633.595,554.671 L478.386,686.938 L433.821,738.594 L479.865,765.39 L462.169,814.783 L440.523,812.745 Z","18":"M440.535,812.736 L78.7332,346.569 L95.1565,321.139 L102.64,312.028 L149.518,381.494 L187.954,363.111 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L286.771,313.213 L303.465,303.835 L360.882,303.813 L366.963,342.664 L396.292,324.141 L433.821,738.594 L479.865,765.39 L462.196,814.756 Z","19":"M462.197,814.752 L440.534,812.744 L396.837,756.433 L333.812,692.568 L71.75,443.162 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L100.908,314.139 L149.518,381.494 L185.818,364.133 L218.04,416.669 L293.872,474.228 L307.577,408.903 L306.216,396.11 L433.821,738.594 L479.865,765.39 Z","2":"M213.929,376.469 L231.302,314.803 L251.368,333.054 L257.329,367.346 L218.04,416.669 L241.092,642.061 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L68.6882,387.8 L149.518,381.494 L191.545,361.394 Z","20":"M479.865,765.39 L462.173,814.744 L440.534,812.735 L396.837,756.433 L333.812,692.568 L270.787,655.593 L180.022,607.928 L145.577,583.324 L129.612,561.554 Z","21":"M433.821,738.594 L479.865,765.39 L462.207,814.748 L440.571,812.732 L396.837,756.433 L333.812,692.568 L270.787,655.593 L187.121,612.998 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L98.3623,317.24 L149.518,381.494 L183.553,365.216 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L284.866,314.282 L303.465,303.835 L360.407,303.839 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L465.421,211.557 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L624.788,517.242 Z","22":"M478.386,686.938 L407.064,769.608 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L91.1739,327.306 L149.518,381.494 L173.232,370.152 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L277.138,318.615 L303.465,303.835 L354.406,303.866 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L454.607,203.575 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.111,797.959 Z","23":"M529.835,715.973 L73.6094,458.502 L68.2657,414.416 L69.1061,361.475 L89.9892,329.14 L149.518,381.494 L170.796,371.317 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L273.603,320.587 L303.465,303.835 L350.006,303.798 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.697,307.033 L440.118,192.88 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.352,800.097 L622.24,769.393 L562.439,803.881 Z","24":"M551.357,774.002 L386.745,330.17 L427.719,304.292 L442.338,331.244 L459.697,307.033 L437.235,192.603 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L671.531,766.187 L622.24,769.393 L561.189,804.602 L578.359,858.039 L509.15,852.666 Z","25":"M525.94,821.372 L642.303,604.504 L647.257,637.946 L669.946,688.366 L669.115,744.09 L622.24,769.393 L561.189,804.602 L584.437,849.198 L601.035,859.802 L503.56,852.231 L440.531,812.768 L462.196,814.757 Z","26":"M462.197,814.752 L572.485,826.207 L584.463,849.117 L601.025,859.836 L503.56,852.231 L440.534,812.744 Z","27":"M440.535,812.736 L462.196,814.756 L525.94,821.372 L572.391,826.07 L584.447,849.176 L601.048,859.762 L503.56,852.231 Z","28":"M503.56,852.231 L440.519,812.76 L462.205,814.743 L525.94,821.372 L651.742,647.912 L669.946,688.366 L669.548,715.044 L561.189,804.602 L584.445,849.141 L601.042,859.752 Z","29":"M601.039,859.795 L503.56,852.231 L440.544,812.703 L462.183,814.793 L525.94,821.372 L529.795,814.189 Z","3":"M191.545,361.394 L237.441,392.304 L218.04,416.669 L365.852,725.035 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.9459,420.028 Z","30":"M584.446,849.178 L601.041,859.791 L503.56,852.231 L440.549,812.679 L462.194,814.763 L525.94,821.372 L548.248,779.797 Z","31":"M561.189,804.602 L589.503,858.882 L503.56,852.231 L485.219,840.747 L525.94,821.372 L551.357,774.002 L405.041,318.615 L427.719,304.292 L442.338,331.244 L459.697,307.033 L436.358,192.615 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.141,742.344 Z","32":"M622.24,769.393 L491.588,844.742 L487.446,842.151 L525.94,821.372 L551.357,774.002 L529.835,715.973 L72.7914,451.753 L68.2657,414.416 L69.1061,361.475 L88.5089,331.432 L149.518,381.494 L167.743,372.777 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L269.106,323.118 L303.465,303.835 L343.771,303.896 L366.963,342.664 L427.596,304.343 L442.338,331.244 L459.697,307.033 L419.545,192.821 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L621.774,854.686 Z","33":"M621.917,828.505 L623.644,512.379 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L601.045,859.799 L584.455,849.194 Z","34":"M584.446,849.178 L675.238,799.086 L675.829,804.332 L662.383,844.669 L601.041,859.791 Z","35":"M601.039,859.795 L584.449,849.175 L621.917,828.505 L670.37,755.887 L675.829,804.332 L662.383,844.669 Z","36":"M662.383,844.669 L601.036,859.785 L584.445,849.162 L621.917,828.505 L622.24,769.393 L387.689,329.574 L427.719,304.292 L442.338,331.244 L459.697,307.033 L416.668,192.897 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 Z","37":"M675.829,804.332 L662.383,844.669 L601.011,859.758 L584.463,849.212 L621.917,828.505 L622.24,769.393 L68.3633,408.268 L69.1061,361.475 L88.0636,332.122 L149.518,381.494 L166.763,373.246 L218.04,416.669 L293.872,474.228 L307.577,408.903 L303.008,365.962 L267.407,324.102 L303.465,303.835 L340.998,303.854 L366.963,342.664 L427.719,304.292 L442.338,331.244 L459.495,307.12 L409.839,192.994 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L631.236,544.644 L647.257,637.946 L660.362,667.068 Z","38":"M669.106,744.669 L675.829,804.332 L662.383,844.669 L604.845,858.833 L621.917,828.505 L622.24,769.393 L526.822,819.729 L551.357,774.002 L529.835,715.973 L478.386,686.938 L152.556,588.31 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L85.2079,336.543 L149.518,381.494 L158.947,376.984 L293.872,474.228 L307.557,408.924 L303.008,365.962 L264.204,325.821 L303.465,303.835 L337.736,303.778 L366.963,342.664 L427.729,304.286 L442.466,331.173 L459.697,307.033 L421.781,219.781 L409.164,193.004 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L612.439,467.873 L647.257,637.946 L669.946,688.366 Z","39":"M669.946,688.366 L667.859,828.243 L662.383,844.669 L612.13,857.059 L621.917,828.505 L622.24,769.393 L561.189,804.602 L515.739,853.176 L503.56,852.231 L496.99,848.111 L525.94,821.372 L551.357,774.002 L529.835,715.973 L478.386,686.938 L322.232,685.774 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L76.2975,350.34 L293.872,474.228 L307.577,408.903 L303.008,365.962 L260.097,328.259 L303.457,303.842 L332.983,303.894 L366.963,342.664 L425.894,305.444 L442.338,331.244 L459.697,307.033 L421.781,219.781 L407.611,193.026 L439.694,192.568 L450.389,200.461 Z","4":"M149.518,381.494 L191.545,361.394 L213.929,376.469 L252.484,373.461 L218.04,416.669 L293.872,474.228 L669.541,715.559 L669.106,744.669 L675.829,804.332 L673.464,811.426 L622.24,769.393 L603.116,780.421 L529.835,715.973 L478.386,686.938 L433.821,738.594 L472.169,786.761 L462.049,814.858 L440.604,812.689 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L111.914,300.686 Z","40":"M647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L618.32,855.547 L621.917,828.505 L622.24,769.393 L561.189,804.602 L535.317,854.697 L505.434,852.377 L525.94,821.372 L551.357,774.002 L529.835,715.973 L478.386,686.938 L361.672,720.799 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L68.9702,370.034 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.208,329.776 L303.465,303.835 L330.149,303.882 L366.963,342.664 L425.336,305.797 L442.338,331.244 L459.697,307.033 L421.781,219.781 L407.357,193.03 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 Z","41":"M637.173,569.879 L673.114,812.478 L662.383,844.669 L620.353,855.017 L621.917,828.505 L622.24,769.393 L561.189,804.602 L544.737,855.425 L517.998,853.351 L551.357,774.002 L529.835,715.973 L478.386,686.938 L391.481,751.006 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L68.3139,411.383 L293.872,474.228 L307.577,408.903 L303.008,365.962 L251.612,334.599 L251.359,333.118 L303.465,303.835 L320.765,303.818 L366.963,342.664 L422.845,307.37 L442.338,331.244 L459.697,307.033 L421.781,219.781 L405.34,193.058 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 Z","42":"M620.367,498.45 L637.173,569.879 L647.257,637.946 L670.901,760.596 L675.829,804.332 L662.383,844.669 L622.827,854.438 L622.24,769.393 L561.189,804.602 L551.267,855.932 L531.228,854.378 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L408.384,771.34 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L73.5342,457.881 L293.872,474.228 L307.577,408.903 L303.008,365.962 L253.501,345.294 L251.396,333.054 L303.465,303.835 L303.803,303.835 L366.963,342.664 L419.301,309.608 L442.338,331.244 L459.697,307.033 L421.781,219.781 L402.764,193.095 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 Z","43":"M602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.174,740.088 L669.106,744.669 L675.829,804.332 L662.383,844.669 L627.074,853.357 L622.24,769.393 L561.189,804.602 L555.456,856.263 L539.25,855.004 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L412.784,776.984 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L91.01,503.027 L293.872,474.228 L307.577,408.903 L303.008,365.962 L255.311,355.71 L251.408,333 L287.158,312.971 L366.963,342.664 L413.383,313.346 L442.338,331.244 L459.697,307.033 L421.781,219.781 L398.901,193.15 L439.694,192.568 L474.988,218.618 L530.451,269.879 L571.757,322.751 Z","44":"M585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.278,733.169 L669.106,744.669 L675.829,804.332 L662.383,844.669 L629.971,852.676 L622.24,769.393 L561.189,804.602 L558.345,856.474 L544.58,855.408 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L416.257,781.509 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L113.384,539.425 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.014,365.46 L251.389,333.06 L257.796,329.464 L366.963,342.664 L401.969,320.555 L442.338,331.244 L459.697,307.033 L421.781,219.781 L392.743,193.238 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 Z","45":"M572.467,323.66 L611.216,463.156 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.315,730.64 L669.106,744.669 L675.829,804.332 L662.383,844.669 L631.493,852.262 L622.24,769.393 L561.189,804.602 L559.969,856.626 L547.53,855.657 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L418.54,784.326 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L130.373,562.591 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.322,367.298 L254.843,353.033 L366.963,342.664 L379.221,334.922 L442.338,331.244 L459.697,307.033 L421.781,219.781 L383.471,193.371 L439.694,192.568 L474.988,218.618 L530.451,269.879 Z","46":"M530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.646,708.494 L669.106,744.669 L675.829,804.332 L662.383,844.669 L637.211,850.866 L622.24,769.393 L561.189,804.602 L564.199,856.958 L554.767,856.223 L551.357,774.002 L529.835,715.973 L478.382,686.937 L433.821,738.594 L423.15,790.358 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L157.615,591.923 L293.872,474.228 L303.598,427.868 L442.338,331.244 L459.697,307.033 L421.781,219.781 L366.194,194.154 L380.871,193.408 L439.694,192.568 L474.988,218.618 Z","47":"M474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.877,693.006 L669.106,744.669 L675.829,804.332 L662.383,844.669 L643.602,849.296 L622.24,769.393 L561.189,804.602 L568.948,857.343 L562.751,856.858 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L429.105,798.159 L396.837,756.433 L384.187,743.615 L459.697,307.033 L421.781,219.781 L175.34,225.165 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 Z","48":"M439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L647.243,848.401 L622.24,769.393 L561.189,804.602 L571.707,857.588 L567.344,857.245 L551.357,774.002 L532.335,722.713 L459.697,307.033 L421.781,219.781 L365.592,243.535 L335.861,263.984 L301.181,225.262 L140.042,263.298 L159.862,232.904 L205.241,210.215 L255.495,198.279 L331.291,195.929 L380.871,193.408 Z","49":"M380.871,193.408 L439.694,192.568 L474.988,218.618 L530.451,269.879 L561.86,310.083 L421.781,219.781 L365.592,243.535 L353.392,283.562 L301.181,225.262 L173.62,276.253 L161.377,273.179 L129.596,279.081 L159.862,232.904 L205.241,210.215 L247.439,200.193 Z","5":"M128.047,335.355 L279.428,660.662 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L129.6,279.122 L161.394,273.228 Z","50":"M331.291,195.929 L380.871,193.408 L439.694,192.568 L474.988,218.618 L497.976,239.865 L421.781,219.781 L365.592,243.535 L398.936,297.442 L371.515,303.841 L301.181,225.262 L221.314,303.07 L205.249,284.192 L161.365,273.161 L129.64,279.194 L159.862,232.904 L205.241,210.215 L272.467,194.248 Z","51":"M272.467,194.248 L448.797,199.286 L474.988,218.618 L488.611,231.208 L421.781,219.781 L365.592,243.535 L398.978,297.392 L373.509,303.385 L301.181,225.262 L263.722,262.265 L251.456,333.082 L231.284,314.797 L205.249,284.192 L161.433,273.281 L129.569,279.052 L159.862,232.904 L205.241,210.215 Z","52":"M205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 L474.988,218.618 L478.98,222.307 L421.781,219.781 L379.688,237.576 L301.181,225.262 L263.722,262.265 L251.447,333.049 L231.257,314.806 L205.249,284.192 L161.376,273.215 L129.588,279.098 L159.862,232.904 Z","53":"M159.862,232.904 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 L471.512,216.052 L301.181,225.262 L263.722,262.265 L251.433,333.03 L236.745,319.783 L205.249,284.192 L161.387,273.229 L129.627,279.133 Z","54":"M129.61,279.122 L159.862,232.904 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L403.692,193.082 L301.181,225.262 L273.676,252.432 Z","55":"M161.395,273.228 L129.612,279.13 L159.862,232.904 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L394.585,193.212 L301.181,225.262 L263.722,262.265 L257.618,297.284 Z","56":"M205.249,284.192 L137.399,267.198 L159.862,232.904 L205.241,210.215 L272.467,194.248 L331.291,195.929 L350.525,194.951 L301.181,225.262 L263.722,262.265 L251.4,333.06 L231.284,314.802 Z","57":"M231.288,314.799 L161.093,232.289 L205.241,210.215 L272.467,194.248 L305.138,195.182 L263.722,262.265 L251.385,333.075 Z","58":"M251.388,333.071 L231.281,314.807 L205.249,284.192 L158.623,234.796 L159.862,232.904 L205.241,210.215 L272.467,194.248 L275.555,194.337 Z","59":"M263.722,262.265 L251.406,333.074 L231.283,314.796 L205.249,284.192 L161.393,273.214 L131.328,276.431 L159.862,232.904 L205.241,210.215 L272.467,194.248 L330.888,195.917 Z","6":"M161.395,273.228 L71.4609,440.777 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 L129.612,279.13 Z","60":"M301.181,225.262 L221.809,303.666 L205.249,284.192 L161.397,273.234 L129.632,279.193 L159.862,232.904 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 L473.385,217.435 L421.781,219.781 L365.592,243.535 L398.939,297.441 L371.496,303.866 Z","61":"M371.531,303.835 L273.437,194.276 L331.291,195.929 L360.756,194.431 L365.592,243.535 L398.94,297.441 Z","62":"M398.94,297.44 L371.533,303.845 L301.181,225.262 L262.41,196.637 L272.467,194.248 L331.291,195.929 L335.993,195.69 Z","63":"M365.592,243.535 L398.928,297.447 L371.508,303.837 L301.181,225.262 L228.59,204.669 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 L456.613,205.055 Z","64":"M421.781,219.781 L330.731,258.273 L301.181,225.262 L162.541,231.564 L205.241,210.215 L272.467,194.248 L331.291,195.929 L380.871,193.408 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.724,804.378 Z","65":"M459.697,307.033 L410.139,192.99 L439.694,192.568 L474.988,218.618 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L649.794,847.772 L622.24,769.393 L561.189,804.602 L571.975,857.48 L567.679,857.151 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L430.167,799.537 L396.837,756.433 L333.812,692.568 L270.787,655.593 L224.808,634.641 Z","66":"M442.338,331.244 L503.918,245.356 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L662.383,844.669 L653.997,846.736 L622.24,769.393 L561.189,804.602 L574.527,857.723 L571.922,857.521 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L432.483,802.594 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L165.682,597.685 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.325,367.323 L255.966,359.482 L366.963,342.664 L427.719,304.292 Z","67":"M427.719,304.292 L669.772,750.575 L675.829,804.332 L662.383,844.669 L654.531,846.603 L622.24,769.393 L561.189,804.602 L575.366,857.745 L573.36,857.591 L551.357,774.002 L529.835,715.973 L478.386,686.938 L433.821,738.594 L434.761,805.532 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L185.489,611.833 L293.872,474.228 L307.577,408.903 L304.712,381.98 Z","68":"M366.963,342.664 L427.719,304.292 L442.338,331.244 L563.992,312.811 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L664.132,839.422 L622.24,769.393 L567.033,801.231 L529.835,715.973 L478.386,686.938 L433.821,738.594 L446.442,813.334 L440.32,812.769 L396.837,756.433 L333.812,692.568 L270.787,655.593 L208.805,627.348 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.333,367.363 L251.384,333.118 L303.465,303.835 L371.512,303.833 L398.947,297.445 Z","69":"M398.94,297.44 L302.282,434.142 L307.577,408.903 L303.008,365.962 L257.335,367.349 L251.375,333.019 L254.717,331.146 Z","7":"M129.61,279.122 L161.396,273.234 L128.047,335.355 L122.047,551.239 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L95.1565,321.139 Z","70":"M371.531,303.835 L398.94,297.441 L366.963,342.664 L326.315,688.169 L270.787,655.593 L221.457,633.114 L293.872,474.228 L307.577,408.903 L303.008,365.962 L257.336,367.35 L251.385,333.058 L303.465,303.835 Z","71":"M303.465,303.835 L394.399,303.835 L366.963,342.664 L620.112,497.468 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L666.116,833.472 L622.24,769.393 L574.352,797.022 L529.835,715.973 L478.386,686.938 L433.821,738.594 L456.522,814.304 L440.38,812.777 L396.837,756.433 L333.812,692.568 L318.321,683.48 L307.577,408.903 L303.008,365.962 L257.337,367.34 L251.389,333.073 Z","72":"M251.388,333.071 L303.465,303.835 L371.517,303.777 L398.932,297.405 L366.963,342.664 L582.721,360.573 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L638.646,579.82 L303.008,365.962 L257.332,367.332 Z","73":"M257.327,367.333 L251.396,333.07 L303.465,303.835 L371.547,303.864 L398.96,297.48 L366.963,342.664 L439.66,326.308 L442.338,331.244 L560.4,308.214 L572.467,323.66 L581.894,357.596 Z","74":"M303.008,365.962 L257.326,367.314 L251.391,333.066 L303.465,303.835 L371.55,303.856 L398.944,297.446 L366.963,342.664 L435.074,317.852 L442.338,331.244 L556.222,302.866 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L668.14,827.399 L622.24,769.393 L580.175,793.652 L529.835,715.973 L478.386,686.938 L433.821,738.594 L460.504,814.604 L440.615,812.711 L396.837,756.433 L338.23,697.044 Z","75":"M307.577,408.903 L296.797,307.578 L303.465,303.835 L371.512,303.824 L398.939,297.439 L366.963,342.664 L427.719,304.292 L442.338,331.244 L536.155,277.18 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L669.448,823.476 L622.24,769.393 L584.327,791.258 L529.835,715.973 L478.386,686.938 L433.821,738.594 L462.54,813.595 L462.113,814.784 L440.427,812.771 L396.837,756.433 L333.812,692.568 L270.787,655.593 L257.129,649.369 Z","76":"M293.872,474.228 L329.619,303.834 L371.526,303.833 L391.042,299.321 L366.963,342.664 L427.719,304.292 L442.338,331.244 L518.002,258.373 L530.451,269.879 L572.467,323.66 L585.072,369.038 L602.72,430.383 L620.367,498.45 L637.173,569.879 L647.257,637.946 L669.946,688.366 L669.106,744.669 L675.829,804.332 L672.435,814.513 L622.24,769.393 L596.479,784.249 L529.835,715.973 L478.386,686.938 L433.821,738.594 L466.978,801.229 L462.098,814.801 L440.517,812.743 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L83.5475,339.114 L149.518,381.494 L163.125,374.986 Z","77":"M218.04,416.669 L670.877,760.388 L675.829,804.332 L672.775,813.493 L622.24,769.393 L599.279,782.635 L529.835,715.973 L478.386,686.938 L433.821,738.594 L470.048,792.641 L462.051,814.842 L440.523,812.742 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 L79.4175,345.509 L149.518,381.494 L191.545,361.394 L213.929,376.469 L231.318,314.802 L251.392,333.073 L257.333,367.338 Z","78":"M257.327,367.333 L116.695,543.94 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L68.3817,407.11 L213.929,376.469 L231.276,314.804 L251.396,333.07 Z","8":"M95.1565,321.139 L129.602,279.115 L161.396,273.229 L128.047,335.355 L149.518,381.494 L452.087,717.422 L433.821,738.594 L472.469,786.233 L462.403,814.599 L440.707,812.614 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 L69.1061,361.475 Z","9":"M69.1061,361.475 L95.1565,321.139 L129.608,279.121 L161.38,273.212 L128.047,335.355 L149.518,381.495 L230.075,401.55 L218.04,416.669 L293.872,474.228 L655.136,655.454 L669.946,688.366 L669.106,744.669 L675.829,804.332 L674.603,808.009 L622.24,769.393 L609.107,776.967 L529.835,715.973 L478.386,686.938 L433.821,738.594 L474.455,780.61 L462.373,814.599 L443.745,812.963 L396.837,756.433 L333.812,692.568 L270.787,655.593 L204.4,625.341 L145.577,583.324 L99.3582,520.299 L74.9884,469.879 L68.2657,414.416 Z"}
;