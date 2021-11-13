const PostAttachment = ({ item }) => {
  return (
    item.Attachment && (
      <>
        {item.Type === "Picture" && (
          <div className="Image-Post">
            <img src={item.Attachment} alt={item.Text} />
          </div>
        )}
        {item.Type === "Video" && (
          <div className="embed-container">
            <iframe
              src={
                "https://www.youtube-nocookie.com/embed/" +
                item.Attachment.replace("https://youtu.be/", "") +
                "?controls=0&autohide=2"
              }
              title={item.Text}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </>
    )
  );
};

export default PostAttachment;
