<template>
  <!-- 时时彩的 三字组合 -->
  <div class="HongKongColour lc_sanzizuhe">
    <ul class = "setul">
      <li class="five-li">
        <p style="padding-top:0px; border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
        <p style="padding-top:0px;border-top: solid 1px #dcdfe6;">
          <span class="spanone a">号码</span>
          <span class="spantwo b">赔率</span>
        </p>
      </li>
    </ul>
<ul class="sethight">  
       <li class="five-li">
         <p><span class="spanone">000</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_000'].odds"></el-input></span></p>
         <p><span class="spanone">001</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_001'].odds"></el-input></span> </p>
         <p><span class="spanone">002</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_002'].odds"></el-input></span></p>
         <p><span class="spanone">003</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_003'].odds"></el-input></span></p>
         <p><span class="spanone">004</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_004'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">005</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_005'].odds"></el-input></span></p>
         <p><span class="spanone">006</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_006'].odds"></el-input></span> </p>
         <p><span class="spanone">007</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_007'].odds"></el-input></span></p>
         <p><span class="spanone">008</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_008'].odds"></el-input></span></p>
         <p><span class="spanone">009</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_009'].odds"></el-input></span></p>
      </li>
      <li class="five-li">       
         <p><span class="spanone">011</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_011'].odds"></el-input></span> </p>
         <p><span class="spanone">012</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_012'].odds"></el-input></span></p>
         <p><span class="spanone">013</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_013'].odds"></el-input></span></p>
         <p><span class="spanone">014</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_014'].odds"></el-input></span></p>
         <p><span class="spanone">015</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_015'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">016</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_016'].odds"></el-input></span> </p>
         <p><span class="spanone">017</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_017'].odds"></el-input></span></p>
         <p><span class="spanone">018</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_018'].odds"></el-input></span></p>
         <p><span class="spanone">019</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_019'].odds"></el-input></span></p>
         <p><span class="spanone">022</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_022'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">023</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_023'].odds"></el-input></span></p>
         <p><span class="spanone">024</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_024'].odds"></el-input></span></p>
         <p><span class="spanone">025</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_025'].odds"></el-input></span></p>
         <p><span class="spanone">026</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_026'].odds"></el-input></span> </p>
         <p><span class="spanone">027</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_027'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         
         <p><span class="spanone">028</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_028'].odds"></el-input></span></p>
         <p><span class="spanone">029</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_029'].odds"></el-input></span></p>
         <p><span class="spanone">033</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_033'].odds"></el-input></span></p>
         <p><span class="spanone">034</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_034'].odds"></el-input></span></p>
         <p><span class="spanone">035</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_035'].odds"></el-input></span></p> 
      </li>
     
      <li class="five-li">
       
         <p><span class="spanone">036</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_036'].odds"></el-input></span> </p>
         <p><span class="spanone">037</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_037'].odds"></el-input></span></p>
         <p><span class="spanone">038</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_038'].odds"></el-input></span></p>
         <p><span class="spanone">039</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_039'].odds"></el-input></span></p>
         <p><span class="spanone">044</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_044'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">045</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_045'].odds"></el-input></span></p>
         <p><span class="spanone">046</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_046'].odds"></el-input></span> </p>
         <p><span class="spanone">047</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_047'].odds"></el-input></span></p>
         <p><span class="spanone">048</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_048'].odds"></el-input></span></p>
         <p><span class="spanone">049</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_049'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">055</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_055'].odds"></el-input></span></p>
         <p><span class="spanone">056</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_056'].odds"></el-input></span> </p>
         <p><span class="spanone">057</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_057'].odds"></el-input></span></p>
         <p><span class="spanone">058</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_058'].odds"></el-input></span></p>
         <p><span class="spanone">059</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_059'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
        
         <p><span class="spanone">066</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_066'].odds"></el-input></span> </p>
         <p><span class="spanone">067</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_067'].odds"></el-input></span></p>
         <p><span class="spanone">068</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_068'].odds"></el-input></span></p>
         <p><span class="spanone">069</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_069'].odds"></el-input></span></p>
         <p><span class="spanone">077</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_077'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">078</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_078'].odds"></el-input></span></p>
         <p><span class="spanone">079</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_079'].odds"></el-input></span></p>
         <p><span class="spanone">088</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_088'].odds"></el-input></span></p>
         <p><span class="spanone">089</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_089'].odds"></el-input></span></p>     
         <p><span class="spanone">099</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_099'].odds"></el-input></span></p>
      </li>
      <li class="five-li">       
         <p><span class="spanone">111</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_111'].odds"></el-input></span> </p>
         <p><span class="spanone">112</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_112'].odds"></el-input></span></p>
         <p><span class="spanone">113</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_113'].odds"></el-input></span></p>
         <p><span class="spanone">114</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_114'].odds"></el-input></span></p>
         <p><span class="spanone">115</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_115'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">116</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_116'].odds"></el-input></span> </p>
         <p><span class="spanone">117</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_117'].odds"></el-input></span></p>
         <p><span class="spanone">118</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_118'].odds"></el-input></span></p>
         <p><span class="spanone">119</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_119'].odds"></el-input></span></p>
         <p><span class="spanone">122</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_122'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">123</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_123'].odds"></el-input></span></p>
         <p><span class="spanone">124</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_124'].odds"></el-input></span></p>
         <p><span class="spanone">125</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_125'].odds"></el-input></span></p>
         <p><span class="spanone">126</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_126'].odds"></el-input></span> </p>
         <p><span class="spanone">127</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_127'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         
         <p><span class="spanone">128</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_128'].odds"></el-input></span></p>
         <p><span class="spanone">129</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_129'].odds"></el-input></span></p>
         <p><span class="spanone">133</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_133'].odds"></el-input></span></p>
         <p><span class="spanone">134</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_134'].odds"></el-input></span></p>
         <p><span class="spanone">135</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_135'].odds"></el-input></span></p> 
      </li>
     
      <li class="five-li">
       
         <p><span class="spanone">136</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_136'].odds"></el-input></span> </p>
         <p><span class="spanone">137</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_137'].odds"></el-input></span></p>
         <p><span class="spanone">138</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_138'].odds"></el-input></span></p>
         <p><span class="spanone">139</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_139'].odds"></el-input></span></p>
         <p><span class="spanone">144</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_144'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">145</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_145'].odds"></el-input></span></p>
         <p><span class="spanone">146</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_146'].odds"></el-input></span> </p>
         <p><span class="spanone">147</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_147'].odds"></el-input></span></p>
         <p><span class="spanone">148</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_148'].odds"></el-input></span></p>
         <p><span class="spanone">149</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_149'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">155</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_155'].odds"></el-input></span></p>
         <p><span class="spanone">156</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_156'].odds"></el-input></span> </p>
         <p><span class="spanone">157</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_157'].odds"></el-input></span></p>
         <p><span class="spanone">158</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_158'].odds"></el-input></span></p>
         <p><span class="spanone">159</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_159'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
        
         <p><span class="spanone">166</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_166'].odds"></el-input></span> </p>
         <p><span class="spanone">167</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_167'].odds"></el-input></span></p>
         <p><span class="spanone">168</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_168'].odds"></el-input></span></p>
         <p><span class="spanone">169</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_169'].odds"></el-input></span></p>
         <p><span class="spanone">177</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_177'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">178</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_178'].odds"></el-input></span></p>
         <p><span class="spanone">179</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_179'].odds"></el-input></span></p>
         <p><span class="spanone">188</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_188'].odds"></el-input></span></p>
         <p><span class="spanone">189</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_189'].odds"></el-input></span></p>     
         <p><span class="spanone">199</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_199'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">222</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_227'].odds"></el-input></span></p>
         <p><span class="spanone">223</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_223'].odds"></el-input></span></p>
         <p><span class="spanone">224</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_224'].odds"></el-input></span></p>
         <p><span class="spanone">225</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_225'].odds"></el-input></span></p>
         <p><span class="spanone">226</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_226'].odds"></el-input></span> </p>      
      </li>
      <li class="five-li">
         <p><span class="spanone">227</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_227'].odds"></el-input></span></p>
         <p><span class="spanone">228</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_228'].odds"></el-input></span></p>
         <p><span class="spanone">229</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_229'].odds"></el-input></span></p>
         <p><span class="spanone">233</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_233'].odds"></el-input></span></p>
         <p><span class="spanone">234</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_234'].odds"></el-input></span></p>       
      </li>
     
      <li class="five-li">
        <p><span class="spanone">235</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_235'].odds"></el-input></span></p> 
         <p><span class="spanone">236</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_236'].odds"></el-input></span> </p>
         <p><span class="spanone">237</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_237'].odds"></el-input></span></p>
         <p><span class="spanone">238</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_238'].odds"></el-input></span></p>
         <p><span class="spanone">339</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_239'].odds"></el-input></span></p>        
      </li>
      <li class="five-li">
        <p><span class="spanone">244</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_244'].odds"></el-input></span></p>
         <p><span class="spanone">245</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_245'].odds"></el-input></span></p>
         <p><span class="spanone">246</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_246'].odds"></el-input></span> </p>
         <p><span class="spanone">247</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_247'].odds"></el-input></span></p>
         <p><span class="spanone">248</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_248'].odds"></el-input></span></p>
        
      </li>
      <li class="five-li">
         <p><span class="spanone">249</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_249'].odds"></el-input></span></p>
         <p><span class="spanone">255</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_255'].odds"></el-input></span></p>
         <p><span class="spanone">256</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_256'].odds"></el-input></span> </p>
         <p><span class="spanone">257</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_257'].odds"></el-input></span></p>
         <p><span class="spanone">258</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_258'].odds"></el-input></span></p>
        
      </li>
      <li class="five-li">
         <p><span class="spanone">259</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_259'].odds"></el-input></span></p>
         <p><span class="spanone">266</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_266'].odds"></el-input></span> </p>
         <p><span class="spanone">267</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_267'].odds"></el-input></span></p>
         <p><span class="spanone">268</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_268'].odds"></el-input></span></p>
         <p><span class="spanone">269</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_269'].odds"></el-input></span></p>
       
      </li>
      <li class="five-li">
          <p><span class="spanone">277</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_277'].odds"></el-input></span></p>
         <p><span class="spanone">278</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_278'].odds"></el-input></span></p>
         <p><span class="spanone">279</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_279'].odds"></el-input></span></p>
         <p><span class="spanone">288</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_288'].odds"></el-input></span></p>
         <p><span class="spanone">289</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_289'].odds"></el-input></span></p>     
       
      </li>
      <li class="five-li">
         <p><span class="spanone">299</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_299'].odds"></el-input></span></p>
         <p><span class="spanone">333</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_333'].odds"></el-input></span></p>
         <p><span class="spanone">334</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_334'].odds"></el-input></span></p>
         <p><span class="spanone">335</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_335'].odds"></el-input></span></p>
         <p><span class="spanone">336</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_336'].odds"></el-input></span></p>       
      </li>
      <li class="five-li">
         <p><span class="spanone">337</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_337'].odds"></el-input></span></p>
         <p><span class="spanone">338</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_338'].odds"></el-input></span></p>
         <p><span class="spanone">339</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_339'].odds"></el-input></span></p>
         <p><span class="spanone">344</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_344'].odds"></el-input></span></p>
         <p><span class="spanone">345</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_345'].odds"></el-input></span></p>       
      </li>
       <li class="five-li">
         <p><span class="spanone">346</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_346'].odds"></el-input></span> </p>
         <p><span class="spanone">347</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_347'].odds"></el-input></span></p>
         <p><span class="spanone">348</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_348'].odds"></el-input></span></p>
         <p><span class="spanone">349</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_349'].odds"></el-input></span></p>
         <p><span class="spanone">355</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_355'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">356</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_356'].odds"></el-input></span> </p>
         <p><span class="spanone">357</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_357'].odds"></el-input></span></p>
         <p><span class="spanone">358</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_358'].odds"></el-input></span></p>
         <p><span class="spanone">359</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_359'].odds"></el-input></span></p>
         <p><span class="spanone">366</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_366'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">367</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_367'].odds"></el-input></span> </p>
         <p><span class="spanone">368</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_368'].odds"></el-input></span></p>
         <p><span class="spanone">369</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_369'].odds"></el-input></span></p>
         <p><span class="spanone">377</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_377'].odds"></el-input></span></p>
         <p><span class="spanone">378</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_378'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">379</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_379'].odds"></el-input></span> </p>
         <p><span class="spanone">388</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_388'].odds"></el-input></span></p>
         <p><span class="spanone">389</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_389'].odds"></el-input></span></p>
         <p><span class="spanone">399</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_399'].odds"></el-input></span></p>
         <p><span class="spanone">444</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_444'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">445</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_445'].odds"></el-input></span> </p>
         <p><span class="spanone">446</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_446'].odds"></el-input></span></p>
         <p><span class="spanone">447</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_447'].odds"></el-input></span></p>
         <p><span class="spanone">448</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_448'].odds"></el-input></span></p>
         <p><span class="spanone">449</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_449'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">455</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_455'].odds"></el-input></span> </p>
         <p><span class="spanone">456</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_456'].odds"></el-input></span></p>
         <p><span class="spanone">457</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_457'].odds"></el-input></span></p>
         <p><span class="spanone">458</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_458'].odds"></el-input></span></p>
         <p><span class="spanone">459</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_459'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">466</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_466'].odds"></el-input></span> </p>
         <p><span class="spanone">467</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_467'].odds"></el-input></span></p>
         <p><span class="spanone">468</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_468'].odds"></el-input></span></p>
         <p><span class="spanone">469</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_469'].odds"></el-input></span></p>
         <p><span class="spanone">477</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_477'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">478</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_478'].odds"></el-input></span></p>
         <p><span class="spanone">479</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_479'].odds"></el-input></span> </p>
         <p><span class="spanone">488</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_488'].odds"></el-input></span></p>
         <p><span class="spanone">489</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_489'].odds"></el-input></span></p>
         <p><span class="spanone">499</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_499'].odds"></el-input></span></p>      
      </li>
        <li class="five-li">
         <p><span class="spanone">555</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_555'].odds"></el-input></span> </p>
         <p><span class="spanone">556</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_556'].odds"></el-input></span></p>
         <p><span class="spanone">557</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_557'].odds"></el-input></span></p>
         <p><span class="spanone">558</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_558'].odds"></el-input></span></p>
         <p><span class="spanone">559</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_559'].odds"></el-input></span></p>
      </li>
       <li class="five-li">
         <p><span class="spanone">566</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_566'].odds"></el-input></span> </p>
         <p><span class="spanone">567</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_567'].odds"></el-input></span></p>
         <p><span class="spanone">568</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_568'].odds"></el-input></span></p>
         <p><span class="spanone">569</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_569'].odds"></el-input></span></p>
         <p><span class="spanone">577</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_577'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">578</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_578'].odds"></el-input></span></p>
         <p><span class="spanone">579</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_579'].odds"></el-input></span> </p>
         <p><span class="spanone">588</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_588'].odds"></el-input></span></p>
         <p><span class="spanone">589</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_589'].odds"></el-input></span></p>
         <p><span class="spanone">599</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_599'].odds"></el-input></span></p>      
      </li>
        <li class="five-li">
         <p><span class="spanone">666</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_666'].odds"></el-input></span> </p>
         <p><span class="spanone">667</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_667'].odds"></el-input></span></p>
         <p><span class="spanone">668</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_668'].odds"></el-input></span></p>
         <p><span class="spanone">669</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_669'].odds"></el-input></span></p>
         <p><span class="spanone">677</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_677'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">678</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_678'].odds"></el-input></span></p>
         <p><span class="spanone">679</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_679'].odds"></el-input></span> </p>
         <p><span class="spanone">688</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_688'].odds"></el-input></span></p>
         <p><span class="spanone">689</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_689'].odds"></el-input></span></p>
         <p><span class="spanone">699</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_699'].odds"></el-input></span></p>      
      </li>
        <li class="five-li">
         <p><span class="spanone">777</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_777'].odds"></el-input></span> </p>
         <p><span class="spanone">778</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_778'].odds"></el-input></span></p>
         <p><span class="spanone">779</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_779'].odds"></el-input></span></p>
         <p><span class="spanone">788</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_788'].odds"></el-input></span></p>
         <p><span class="spanone">789</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_789'].odds"></el-input></span></p>
      </li>
      <li class="five-li">
         <p><span class="spanone">799</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_799'].odds"></el-input></span></p>
         <p><span class="spanone">888</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_888'].odds"></el-input></span> </p>
         <p><span class="spanone">889</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_889'].odds"></el-input></span></p>
         <p><span class="spanone">899</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_899'].odds"></el-input></span></p>
         <p><span class="spanone">999</span><span class="spantwo"><el-input :disabled="HongKongTheEdit" v-model="inputTemaData['NO_999'].odds"></el-input></span></p>      
      </li>
</ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "lc_sanzizuhe",
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    inputTemaData:{
      get() {
       if(this.$store.state.lc_detail.inputTemaData&&this.$store.state.lc_detail.inputTemaData.NO_999){
         
       }else {
          this.$store.state.lc_detail.inputTemaData = this.data;
       }
        return this.$store.state.lc_detail.inputTemaData;
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
       data:{"NO_000":{"number":"000","odds":"31.5","color":""},"NO_001":{"number":"001","odds":"16.4","color":""},"NO_002":{"number":"002","odds":"16.4","color":""},"NO_003":{"number":"003","odds":"16.4","color":""},"NO_004":{"number":"004","odds":"16.4","color":""},"NO_005":{"number":"005","odds":"16.4","color":""},"NO_006":{"number":"006","odds":"16.4","color":""},"NO_007":{"number":"007","odds":"16.4","color":""},"NO_008":{"number":"008","odds":"16.4","color":""},"NO_009":{"number":"009","odds":"16.4","color":""},"NO_011":{"number":"011","odds":"31.5","color":""},"NO_012":{"number":"012","odds":"16.4","color":""},"NO_013":{"number":"013","odds":"16.4","color":""},"NO_014":{"number":"014","odds":"16.4","color":""},"NO_015":{"number":"015","odds":"16.4","color":""},"NO_016":{"number":"016","odds":"16.4","color":""},"NO_017":{"number":"017","odds":"16.4","color":""},"NO_018":{"number":"018","odds":"16.4","color":""},"NO_019":{"number":"019","odds":"16.4","color":""},"NO_022":{"number":"022","odds":"31.5","color":""},"NO_023":{"number":"023","odds":"16.4","color":""},"NO_024":{"number":"024","odds":"16.4","color":""},"NO_025":{"number":"025","odds":"16.4","color":""},"NO_026":{"number":"026","odds":"16.4","color":""},"NO_027":{"number":"027","odds":"16.4","color":""},"NO_028":{"number":"028","odds":"16.4","color":""},"NO_029":{"number":"029","odds":"16.4","color":""},"NO_033":{"number":"033","odds":"31.5","color":""},"NO_034":{"number":"034","odds":"16.4","color":""},"NO_035":{"number":"035","odds":"16.4","color":""},"NO_036":{"number":"036","odds":"16.4","color":""},"NO_037":{"number":"037","odds":"16.4","color":""},"NO_038":{"number":"038","odds":"16.4","color":""},"NO_039":{"number":"039","odds":"16.4","color":""},"NO_044":{"number":"044","odds":"31.5","color":""},"NO_045":{"number":"045","odds":"16.4","color":""},"NO_046":{"number":"046","odds":"16.4","color":""},"NO_047":{"number":"047","odds":"16.4","color":""},"NO_048":{"number":"048","odds":"16.4","color":""},"NO_049":{"number":"049","odds":"16.4","color":""},"NO_055":{"number":"055","odds":"31.5","color":""},"NO_056":{"number":"056","odds":"16.4","color":""},"NO_057":{"number":"057","odds":"16.4","color":""},"NO_058":{"number":"058","odds":"16.4","color":""},"NO_059":{"number":"059","odds":"16.4","color":""},"NO_066":{"number":"066","odds":"31.5","color":""},"NO_067":{"number":"067","odds":"16.4","color":""},"NO_068":{"number":"068","odds":"16.4","color":""},"NO_069":{"number":"069","odds":"16.4","color":""},"NO_077":{"number":"077","odds":"31.5","color":""},"NO_078":{"number":"078","odds":"16.4","color":""},"NO_079":{"number":"079","odds":"16.4","color":""},"NO_088":{"number":"088","odds":"31.5","color":""},"NO_089":{"number":"089","odds":"16.4","color":""},"NO_099":{"number":"099","odds":"31.5","color":""},"NO_111":{"number":"111","odds":"31.5","color":""},"NO_112":{"number":"112","odds":"16.4","color":""},"NO_113":{"number":"113","odds":"16.4","color":""},"NO_114":{"number":"114","odds":"16.4","color":""},"NO_115":{"number":"115","odds":"16.4","color":""},"NO_116":{"number":"116","odds":"16.4","color":""},"NO_117":{"number":"117","odds":"16.4","color":""},"NO_118":{"number":"118","odds":"16.4","color":""},"NO_119":{"number":"119","odds":"16.4","color":""},"NO_122":{"number":"122","odds":"16.4","color":""},"NO_123":{"number":"123","odds":"31.5","color":""},"NO_124":{"number":"124","odds":"16.4","color":""},"NO_125":{"number":"125","odds":"16.4","color":""},"NO_126":{"number":"126","odds":"16.4","color":""},"NO_127":{"number":"127","odds":"16.4","color":""},"NO_128":{"number":"128","odds":"16.4","color":""},"NO_129":{"number":"129","odds":"16.4","color":""},"NO_133":{"number":"133","odds":"16.4","color":""},"NO_134":{"number":"134","odds":"16.4","color":""},"NO_135":{"number":"135","odds":"31.5","color":""},"NO_136":{"number":"136","odds":"16.4","color":""},"NO_137":{"number":"137","odds":"16.4","color":""},"NO_138":{"number":"138","odds":"16.4","color":""},"NO_139":{"number":"139","odds":"16.4","color":""},"NO_144":{"number":"144","odds":"16.4","color":""},"NO_145":{"number":"145","odds":"16.4","color":""},"NO_146":{"number":"146","odds":"16.4","color":""},"NO_147":{"number":"147","odds":"16.4","color":""},"NO_148":{"number":"148","odds":"31.5","color":""},"NO_149":{"number":"149","odds":"16.4","color":""},"NO_155":{"number":"155","odds":"16.4","color":""},"NO_156":{"number":"156","odds":"16.4","color":""},"NO_157":{"number":"157","odds":"16.4","color":""},"NO_158":{"number":"158","odds":"16.4","color":""},"NO_159":{"number":"159","odds":"16.4","color":""},"NO_166":{"number":"166","odds":"31.5","color":""},"NO_167":{"number":"167","odds":"16.4","color":""},"NO_168":{"number":"168","odds":"16.4","color":""},"NO_169":{"number":"169","odds":"16.4","color":""},"NO_177":{"number":"177","odds":"16.4","color":""},"NO_178":{"number":"178","odds":"16.4","color":""},"NO_179":{"number":"179","odds":"31.5","color":""},"NO_188":{"number":"188","odds":"16.4","color":""},"NO_189":{"number":"189","odds":"16.4","color":""},"NO_199":{"number":"199","odds":"16.4","color":""},"NO_222":{"number":"222","odds":"16.4","color":""},"NO_223":{"number":"223","odds":"31.5","color":""},"NO_224":{"number":"224","odds":"16.4","color":""},"NO_225":{"number":"225","odds":"16.4","color":""},"NO_226":{"number":"226","odds":"16.4","color":""},"NO_227":{"number":"227","odds":"31.5","color":""},"NO_228":{"number":"228","odds":"16.4","color":""},"NO_229":{"number":"229","odds":"16.4","color":""},"NO_233":{"number":"233","odds":"31.5","color":""},"NO_234":{"number":"234","odds":"16.4","color":""},"NO_235":{"number":"235","odds":"31.5","color":""},"NO_236":{"number":"236","odds":"31.5","color":""},"NO_237":{"number":"237","odds":"31.5","color":""},"NO_238":{"number":"238","odds":"31.5","color":""},"NO_239":{"number":"239","odds":"31.5","color":""},"NO_244":{"number":"244","odds":"31.5","color":""},"NO_245":{"number":"245","odds":"31.5","color":""},"NO_246":{"number":"246","odds":"31.5","color":""},"NO_247":{"number":"247","odds":"31.5","color":""},"NO_248":{"number":"248","odds":"31.5","color":""},"NO_249":{"number":"249","odds":"31.5","color":""},"NO_255":{"number":"255","odds":"31.5","color":""},"NO_256":{"number":"256","odds":"31.5","color":""},"NO_257":{"number":"257","odds":"31.5","color":""},"NO_258":{"number":"258","odds":"31.5","color":""},"NO_259":{"number":"259","odds":"31.5","color":""},"NO_266":{"number":"266","odds":"31.5","color":""},"NO_267":{"number":"266","odds":"31.5","color":""},"NO_268":{"number":"268","odds":"31.5","color":""},"NO_269":{"number":"269","odds":"31.5","color":""},"NO_277":{"number":"277","odds":"31.5","color":""},"NO_278":{"number":"278","odds":"31.5","color":""},"NO_279":{"number":"279","odds":"31.5","color":""},"NO_288":{"number":"288","odds":"31.5","color":""},"NO_289":{"number":"289","odds":"31.5","color":""},"NO_299":{"number":"299","odds":"31.5","color":""},"NO_333":{"number":"333","odds":"31.5","color":""},"NO_334":{"number":"334","odds":"31.5","color":""},"NO_335":{"number":"335","odds":"31.5","color":""},"NO_336":{"number":"336","odds":"31.5","color":""},"NO_337":{"number":"337","odds":"31.5","color":""},"NO_338":{"number":"338","odds":"31.5","color":""},"NO_339":{"number":"339","odds":"31.5","color":""},"NO_344":{"number":"344","odds":"31.5","color":""},"NO_345":{"number":"345","odds":"31.5","color":""},"NO_346":{"number":"346","odds":"31.5","color":""},"NO_347":{"number":"347","odds":"31.5","color":""},"NO_348":{"number":"348","odds":"31.5","color":""},"NO_349":{"number":"349","odds":"31.5","color":""},"NO_355":{"number":"355","odds":"31.5","color":""},"NO_356":{"number":"356","odds":"31.5","color":""},"NO_357":{"number":"357","odds":"31.5","color":""},"NO_358":{"number":"358","odds":"31.5","color":""},"NO_359":{"number":"359","odds":"31.5","color":""},"NO_366":{"number":"366","odds":"31.5","color":""},"NO_367":{"number":"367","odds":"31.5","color":""},"NO_368":{"number":"368","odds":"31.5","color":""},"NO_369":{"number":"369","odds":"31.5","color":""},"NO_377":{"number":"377","odds":"31.5","color":""},"NO_378":{"number":"378","odds":"31.5","color":""},"NO_379":{"number":"379","odds":"31.5","color":""},"NO_388":{"number":"388","odds":"31.5","color":""},"NO_389":{"number":"389","odds":"31.5","color":""},"NO_399":{"number":"399","odds":"31.5","color":""},"NO_444":{"number":"444","odds":"31.5","color":""},"NO_445":{"number":"445","odds":"31.5","color":""},"NO_446":{"number":"446","odds":"31.5","color":""},"NO_447":{"number":"447","odds":"31.5","color":""},"NO_448":{"number":"448","odds":"31.5","color":""},"NO_449":{"number":"449","odds":"31.5","color":""},"NO_455":{"number":"455","odds":"31.5","color":""},"NO_456":{"number":"456","odds":"31.5","color":""},"NO_457":{"number":"457","odds":"31.5","color":""},"NO_458":{"number":"458","odds":"31.5","color":""},"NO_459":{"number":"459","odds":"31.5","color":""},"NO_466":{"number":"466","odds":"31.5","color":""},"NO_467":{"number":"467","odds":"31.5","color":""},"NO_468":{"number":"468","odds":"31.5","color":""},"NO_469":{"number":"469","odds":"31.5","color":""},"NO_477":{"number":"477","odds":"31.5","color":""},"NO_478":{"number":"478","odds":"31.5","color":""},"NO_479":{"number":"479","odds":"31.5","color":""},"NO_488":{"number":"488","odds":"31.5","color":""},"NO_489":{"number":"489","odds":"31.5","color":""},"NO_499":{"number":"499","odds":"31.5","color":""},"NO_555":{"number":"555","odds":"31.5","color":""},"NO_556":{"number":"556","odds":"31.5","color":""},"NO_557":{"number":"557","odds":"31.5","color":""},"NO_558":{"number":"558","odds":"31.5","color":""},"NO_559":{"number":"559","odds":"31.5","color":""},"NO_566":{"number":"566","odds":"31.5","color":""},"NO_567":{"number":"567","odds":"31.5","color":""},"NO_568":{"number":"568","odds":"31.5","color":""},"NO_569":{"number":"569","odds":"31.5","color":""},"NO_577":{"number":"577","odds":"31.5","color":""},"NO_578":{"number":"578","odds":"31.5","color":""},"NO_579":{"number":"579","odds":"31.5","color":""},"NO_588":{"number":"588","odds":"31.5","color":""},"NO_589":{"number":"589","odds":"31.5","color":""},"NO_599":{"number":"599","odds":"31.5","color":""},"NO_666":{"number":"666","odds":"31.5","color":""},"NO_667":{"number":"667","odds":"31.5","color":""},"NO_668":{"number":"668","odds":"31.5","color":""},"NO_669":{"number":"669","odds":"31.5","color":""},"NO_677":{"number":"677","odds":"31.5","color":""},"NO_678":{"number":"678","odds":"31.5","color":""},"NO_679":{"number":"679","odds":"31.5","color":""},"NO_688":{"number":"688","odds":"31.5","color":""},"NO_689":{"number":"689","odds":"31.5","color":""},"NO_699":{"number":"699","odds":"31.5","color":""},"NO_777":{"number":"777","odds":"31.5","color":""},"NO_778":{"number":"778","odds":"31.5","color":""},"NO_779":{"number":"779","odds":"31.5","color":""},"NO_788":{"number":"788","odds":"31.5","color":""},"NO_789":{"number":"789","odds":"31.5","color":""},"NO_799":{"number":"799","odds":"31.5","color":""},"NO_888":{"number":"888","odds":"31.5","color":""},"NO_889":{"number":"889","odds":"31.5","color":""},"NO_899":{"number":"899","odds":"31.5","color":""},"NO_999":{"number":"999","odds":"31.5","color":""}}
   };
  },
  methods: {
     getData() {

    }
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss">
// .lc_sanzizuhe {
//   .setul{
//     height: 27px;
//      width:calc(100% - 17px);
//   }
//    .sethight{
//    max-height: 490px;
//     overflow: hidden;
//     overflow-y: auto;
//    }

//  .five-li{
//  background: rgba(242, 242, 242, 1);
//  }

//   .five-li,.five-lia {
//     height: 25px;
//     line-height: 25px;
//     p {
//       border: solid 1px #dcdfe6;
//       width: 20%;
//       float: left;
//        border-top: none;
//       border-left: none;
//       // padding-top: 3px;
//       &:last-child {
//         // border-right: none;
//       }
//     }
//     span {
//       display: inline-block;
//       text-align: center;
//       font-size: 12px;
//     }
//     // &:last-child {
//     //   p {
//     //      border-bottom:  solid 1px #dcdfe6;
//     //   }
//     // }
//   }
//   .spanone {
//     padding-top: 3px;
//     width: 6vh;
//     height: 100%;
//     border-right: solid 1px #dcdfe6;
//     .border_yuan {
//       border: solid 1px #dcdfe6;
//       border-radius: 50%;
//       width: 20px;
//       height: 20px;
//       line-height: 20px;
//       color: white;
//     }
//   }

//   .spantwo {
//     padding-top: 3px;
//    width:calc(100% - 7vh);
//     .el-input {
//       width: 95%;
//       height: 100%;
//       line-height: 100%;
//       input {
//         height: 22px;width: 16vh;
//         text-align:center;
//       }
//     }
//   }
//   .spanone.a {
//     padding-top: 0px;
// }
//  .spantwo.b {
//     padding-top: 0px;
//    }
// }

// @media (min-width: 700px) and (max-width: 10px) {
//   .lc_sanzizuhe {
//   .sethight{
//    max-height: 380px;
//    }
//     .spantwo {
//       width: 13vh !important;
//       .el-input {
//         input{
//                 width: 14vh;
//             }
//       }
//     }
//   }
// }
</style>

