  let settings = {
    infinite: true,
    slidesToShow: 5,
        slidesToScroll: 2 ,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2   
      }
    },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2   
      }
    },
      {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1   
      }
    }
      
    ]
  }

export default settings;