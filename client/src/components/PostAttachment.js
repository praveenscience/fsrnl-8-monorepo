const PostAttachment = ({ item }) => {
  return (
    item.Attachment && (
      <>
        {item.Type === "Picture" && (
          <img src={item.Attachment} alt={item.Text} />
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
