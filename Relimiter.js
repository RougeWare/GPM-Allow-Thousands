function relimit(oldLimit, newLimit) {
    var tooSmall = $$("[maxlength='" + oldLimit + "']");
    var successCount = 0;
    for(eachElement in tooSmall) {
        var attrs = tooSmall[eachElement].attributes;
        attrLoop: for(eachAttr in attrs) {
            var attr = attrs[eachAttr];
            if (attr.nodeName == "maxlength") {
                attr.nodeValue = newLimit;
                successCount++;
                break attrLoop;
            }
        }
    }
    console.log(successCount + "/" + tooSmall.length + " elements now accept " + newLimit + " digits");
}
