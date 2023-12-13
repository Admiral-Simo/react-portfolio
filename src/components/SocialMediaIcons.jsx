const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-3 gap-7">
      <a
        href="https://github.com/Admiral-Simo"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-[32px]" src="/assets/github.png" alt="github-link" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-khalis-606327293/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        href="https://www.instagram.com/khaliss614/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/instagram.png" alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
