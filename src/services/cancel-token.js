import axios from "axios";
const cancenToken = () => axios.CancelToken.source();

export default cancenToken;
