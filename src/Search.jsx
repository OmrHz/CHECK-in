import list from "./Data.json";
const Search = () => {
  return (
    <div className="searching">
      <input id="participant" placeholder="Search for a participant" />
      <button id="Btn_QR">QR Code</button>
      <div className="checking">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Présent</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((item, index) => (
                <tr key={index}>
                  <td>{item.Nom}</td>
                  <td>{item.Prenom}</td>
                  <td>
                    {item.statut ? (
                      <input id="box" type="checkbox" checked />
                    ) : (
                      <input id="box" type="checkbox" />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
