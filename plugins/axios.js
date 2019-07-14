import {
  Message
} from 'element-ui';

export default ({ $axios }) => {
  $axios.onError(error => {
    console.log(error.response.data);
    const {
      message,
      statusCode
    } = error.response.data;

    if (statusCode === 400) {
      // 错误警告
      Message.warning(message)
    }
  })
}
