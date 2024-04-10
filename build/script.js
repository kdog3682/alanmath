import Vue from "/home/kdog3682/2024-javascript/lib/vue.js"
import {VCheckbox, VIframe, VDate, VEnum, VHtml, VIcon, VImg, VInfo, VInlineCode, VInput, VInput2, VItem, VList, VLorem, VPre, VSkeleton, VSlider, VTable} from "/home/kdog3682/2024-javascript/vuekit/base-components.js"

const Temp = {
    template: `
        <div>
            <p>hi 1</p>
            <p style="color: red;">hi 2</p>
            
        </div>
    `,
}

Temp.el = '#app'
new Vue(Temp)

