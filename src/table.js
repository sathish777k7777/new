import React from "react"

export default function Table(){
    return(
      <section>
      
      <h1>Fixed Table header</h1>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Code</th>
              <th>Company</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr>
              <td>AAC</td>
              <td>AUSTRALIAN COMPANY </td>
              <td>100</td>
              <td>200</td>
              <td>-36%</td>
              <td>
                <button className="btn" type="submit">Edit</button>
                <button type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AAD</td>
              <td>AUSENCO</td>
              <td>200</td>
              <td>100</td>
              <td>+30%</td>
              <td>
                <button className="btn" type="submit">Edit</button>
                <button type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AAX</td>
              <td>ADELAIDE</td>
              <td>300</td>
              <td>400</td>
              <td>-36%</td>
              <td>
              <button className="btn" type="submit">Edit</button>
                <button type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <td>XXD</td>
              <td>ADITYA BIRLA</td>
              <td>$1.02</td>
              <td>-1.01</td>
              <td>+2.36%</td>
              <td>
              <button className="btn" type="submit">Edit</button>
                <button type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AAC</td>
              <td>AUSTRALIAN COMPANY </td>
              <td>$1.38</td>
              <td>+2.01</td>
              <td>-0.36%</td>
              <td>
              <button className="btn" type="submit">Edit</button>
                <button type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AAD</td>
              <td>AUSENCO</td>
              <td>$2.38</td>
              <td>-0.01</td>
              <td>-1.36%</td>
              <td>
              <button className="btn" type="submit">Edit</button>
              <button type="submit">Delete</button>
              
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </section>
      




    )
}