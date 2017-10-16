class DribbbeRequestUtils {
    constructor(){
        this.token = $.jribbble.setToken('1d5bb4e38bbcec26a09d437ae9b95023d76ea6ccf9c0630fbc41f4fe0cb44397');
    }

    /**
     * getShots - get the data shots from dribbble api
     * @return {Promise}
     */
    getShots(id, options) {
        if (id) return $.jribbble.shots(id, options);
        else return $.jribbble.shots();

    }
}

const dribbleUtils = new DribbbeRequestUtils();
export default dribbleUtils;