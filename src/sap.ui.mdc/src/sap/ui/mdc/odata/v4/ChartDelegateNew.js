/*
 * ! ${copyright}
 */

sap.ui.define([
    "../../ChartDelegateNew",
    "../../util/loadModules",
    "../../library",
    "sap/ui/core/Core"
], function (
    ChartDelegate,
    loadModules,
    library,
    Core
) {
    "use strict";
    /**
     * Delegate class for sap.ui.mdc.ChartNew and ODataV4.
     * Enables additional analytical capabilities.
     * <b>Note:</b> The class is experimental and the API/behavior is not finalized.
     *
     * @author SAP SE
     * @private
     * @ui5-restricted sap.fe
     * @MDC_PUBLIC_CANDIDATE
     * @since 1.88
     * @alias sap.ui.mdc.odata.v4.ChartDelegateNew
     */
    var Delegate = Object.assign({}, ChartDelegate);


    return Delegate;
});