

const selectFilter = function () {
    $(function () {

            $('.js-example-basic-single').select2(
                {
                    width: '70%',
                }
            );
        function formatState (state) {
            if (!state.id) {
                return state.text;
            }
            var baseUrl = "/user/pages/images/flags";
            var $state = $(
                '<span>' + state.text + ' ' + '</span>'
            );
            return $state;
        };
            $('.js-example-basic-multiple').select2(
                {
                    width: '70%',
                    closeOnSelect: false,
                    templateResult: formatState,
                }
            );
    })

}

export default selectFilter;