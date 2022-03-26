import Spinner from '../../spinner/Spinner'
import './table.scss'

export function Table({ tracks }) {
  return (
    <div className="table">
      {
        tracks.length > 0 ?
          <table>
            <tbody>
              <tr>
                <th></th>
                  <th>Песня</th>
                  <th>Артист</th>
                  <th>Альбом</th>
              <th></th>
              </tr>
              {
                tracks.map((item, index) => (
                  <tr key={index}>
                    <td> {<img src={item.image[0]['#text']} width="33.53px" height="33.53px" alt="no product" className="d-block m-auto mr-auto"/>} </td>
                    <td> {item.name} </td>
                    <td> {item.artist.name} </td>
                    <td> {item.playcount} </td>
                    <td>
                      <a href={item.url} target="_blank">Shazam</a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
           : <Spinner />
      }
    </div>
  )
}