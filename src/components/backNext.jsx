const BackNext = (props) => {
  const BackNextImage = (next = true) => {
    if (next) {
      props.setTempImgSrc(() => {
        let temp = props.tempImgSrc;
        temp++;

        if (temp > props.index.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setTempImgSrc(() => {
        let temp = props.tempImgSrc;
        temp--;

        if (temp < 0) {
          temp = props.index.length - 1;
        }
        return temp;
      });
    }
  };
};

export default BackNext;
