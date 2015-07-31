angular.module('Gridstack.AngularBinding', [])
    .directive('gridstackGrid', gridstackDirective);

function gridstackDirective() {
    return {
        scope: {
            gridstackOptions: '='
        },
        link: gridstackLink
    };
}

function gridstackLink(scope, element) {
    element.gridstack(scope.gridstackOptions);
}