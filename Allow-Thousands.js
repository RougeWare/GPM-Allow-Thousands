function allowThousands() {
    var tooSmall = $$("[maxlength='3']");
    var successCount = 0;
    for(eachElement in tooSmall) {
        var attrs = tooSmall[eachElement].attributes;
        attrLoop: for(eachAttr in attrs) {
            var attr = attrs[eachAttr];
            if (attr.nodeName == "maxlength") {
                attr.nodeValue = "4";
                successCount++;
                break attrLoop;
            }
        }
    }
    console.log("Made " + successCount + " out of " + tooSmall.length + " elements accept 9999 instead of 999.");
}
