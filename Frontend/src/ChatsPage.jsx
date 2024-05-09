import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "952cacec-e8bd-42c6-957b-015e8bd702a5",
    props.user.username,
    props.user.secret
  );
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
