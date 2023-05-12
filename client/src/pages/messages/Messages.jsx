import "../../components/table/table.css";
import CreateMessage from "../../components/create/CreateMessage";
import useOpenModel from "../../hooks/useOpenModel";
const Messages = ({ messages = null,user }) => {
  const [handleCreateMessage, isOpenCreateMessage] = useOpenModel();
  return (
    <>
      <div className="table-container">
        <section className="table__header">
          <h1>Messages</h1>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." />
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>from</th>
                <th>to</th>
                <th>title</th>
                <th>description</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {messages &&
                messages.map((message) => {
                  const dateArray = message?.updatedAt.slice(0, 10).split("-");
                  const [year, month, day] = dateArray;
                  return (
                    <tr key={message?._id}>
                      <td>{message?.from?.username}</td>
                      <td>{message?.to?.username}</td>
                      <td>{message?.title}</td>
                      <td>{message?.description}</td>
                      <td>{`${day}/${month}/${year}`}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
        <button onClick={handleCreateMessage}>New Message</button>
      </div>
      {
        <CreateMessage
          handelClick={handleCreateMessage}
          isOpen={isOpenCreateMessage}
          user={user}
        />
      }
    </>
  );
};

export default Messages;
