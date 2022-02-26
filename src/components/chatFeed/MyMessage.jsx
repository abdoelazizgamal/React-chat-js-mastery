const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#2196f3' }}>
      {/* {message.text} */}
      <div dangerouslySetInnerHTML={{__html: `${message.text}`}}></div>
    </div>
  );
};

export default MyMessage;