const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/haodong1997/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/hli1997"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/lastbow_/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://letterboxd.com/Haodong_/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="letterboxd-link" src="../assets/film.png" />
        </a>
        
      </div>
    );
  };
  
  export default SocialMediaIcons;
  