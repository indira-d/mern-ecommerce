import React from 'react'
import './WidgetLg.css'

const WidgetLg = () => {

    const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

 
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Latest transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/id/1327765791/photo/smiling-young-asian-businesswoman-standing.jpg?s=612x612&w=0&k=20&c=ewcogScjnutv6ehMGhWfBOOhbtvbNn3dWoNNywpduTU=" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type={'Approved'}/>
          </td>
        </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1333370955%2Ffr%2Fphoto%2Fportrait-de-jeune-femme-souriante-sur-fond-blanc-isol%25C3%25A9.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D9nZRxxH5Rp1dk9zlQpQ1Akwsl_HCoB4DLfK7Y05sxk8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Ffemme-d%25C3%25A9tour%25C3%25A9-30-ans&tbnid=t4tQDwIL4k4GwM&vet=10CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc..i&docid=nFZBdBIM4DMuHM&w=612&h=408&itg=1&q=person%20photo&hl=ru&ved=0CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type={'Declined'}/>
          </td>
        </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1333370955%2Ffr%2Fphoto%2Fportrait-de-jeune-femme-souriante-sur-fond-blanc-isol%25C3%25A9.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D9nZRxxH5Rp1dk9zlQpQ1Akwsl_HCoB4DLfK7Y05sxk8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Ffemme-d%25C3%25A9tour%25C3%25A9-30-ans&tbnid=t4tQDwIL4k4GwM&vet=10CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc..i&docid=nFZBdBIM4DMuHM&w=612&h=408&itg=1&q=person%20photo&hl=ru&ved=0CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type={'Pending'}/>
          </td>
        </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1333370955%2Ffr%2Fphoto%2Fportrait-de-jeune-femme-souriante-sur-fond-blanc-isol%25C3%25A9.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D9nZRxxH5Rp1dk9zlQpQ1Akwsl_HCoB4DLfK7Y05sxk8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Ffemme-d%25C3%25A9tour%25C3%25A9-30-ans&tbnid=t4tQDwIL4k4GwM&vet=10CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc..i&docid=nFZBdBIM4DMuHM&w=612&h=408&itg=1&q=person%20photo&hl=ru&ved=0CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type={'Approved'}/>
          </td>
        </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1333370955%2Ffr%2Fphoto%2Fportrait-de-jeune-femme-souriante-sur-fond-blanc-isol%25C3%25A9.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D9nZRxxH5Rp1dk9zlQpQ1Akwsl_HCoB4DLfK7Y05sxk8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Ffemme-d%25C3%25A9tour%25C3%25A9-30-ans&tbnid=t4tQDwIL4k4GwM&vet=10CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc..i&docid=nFZBdBIM4DMuHM&w=612&h=408&itg=1&q=person%20photo&hl=ru&ved=0CAQQxiAoA2oXChMIuOGo2--Z_AIVAAAAAB0AAAAAEAc" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type='Declined'/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg