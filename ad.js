(function(){
    var selectorType = 'id'  // aquí indicas si es un div class o id
    var idOrclass = 'put_here' // aqui el nombre del div
    var lineBreak = 2 // aqui el salto de linea

    var script = document.createElement('script')
        script.src = "https://ced.sascdn.com/tag/3276/smart.js"
        script.type = "application/javascript"
    document.body.appendChild(script)

    var element = selectorType == 'class' ? document.getElementsByClassName(idOrclass)[0] : document.getElementById(idOrclass)

    var div = document.createElement('div')
        div.id = "sas_75421"

    var nodeToInsertBefore = element.querySelectorAll('p')[lineBreak]
    nodeToInsertBefore.parentNode.insertBefore(div, nodeToInsertBefore)

    var campaing = document.createElement('script')
        campaing.type = "application/javascript"
        campaing.innerHTML = 'var sas = sas || {};sas.cmd = sas.cmd || [];sas.cmd.push(function () {sas.call({ siteId: 291961, pageId: 1074565, formatId: 75421, tagId: "sas_75421" },{ networkId: 3276, domain: "//prg.smartadserver.com" , onNoad: function() {}  });});'
    document.body.appendChild(campaing)
})()