import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import JuvenilePlayers from './JuvenilePlayers'
import styles from './LeagueTable.module.css'

function LeagueTable() {
  return (
    <>
      <NavBar />
      {/* //JuvenilePlayers */}
      <hr />
      <div className='container d-flex justify-content-start mt-2 '>
        <div className='row '>
          <div className='col '>
            <table className={styles.table}>
              <thead className='text-warning mb-0 '>
                Tolon Division Three League
              </thead>
              <thead className={styles.thead}>
                <tr>
                  <th scope='col'>POS</th>
                  <th scope='col'>TEAM</th>
                  <th scope='col'>P</th>
                  <th scope='col'>GD</th>
                  <th scope='col'>PTS</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr>
                  <td>1.</td>
                  <th scope='row'>Sari Football Club</th>
                  <td>8</td>
                  <td>+16</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <th scope='row'>Beyom Football Club</th>
                  <td>8</td>
                  <td>+13</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <th scope='row'>Union Wonders SC</th>
                  <td>8</td>
                  <td>+11</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <th scope='row'>Gomda Football CLub</th>
                  <td>8</td>
                  <td>+7</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <th scope='row'>Woribogu Football Club</th>
                  <td>8</td>
                  <td>+9</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <th scope='row'>Tali Football Club</th>
                  <td>8</td>
                  <td>+7</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <th scope='row'>Kpachi Football Club</th>
                  <td>8</td>
                  <td>+5</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <th scope='row'>Shooting Star B</th>
                  <td>8</td>
                  <td>-5</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <th scope='row'>Gbulahigu F.C</th>
                  <td>8</td>
                  <td>-15</td>
                  <td>3</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td></td>
                  <td colspan='6'>Promotion</td>
                </tr>

                <tr>
                  <td></td>
                  <td colspan='6'>Relegation Zone</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className='col '>
            <table className={styles.table}>
              <thead className='text-warning mb-0 '>
                Tolon Under-13 League Table
              </thead>
              <thead className={styles.thead}>
                <tr>
                  <th scope='col'>POS</th>
                  <th scope='col'>TEAM</th>
                  <th scope='col'>P</th>
                  <th scope='col'>GD</th>
                  <th scope='col'>PTS</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr>
                  <td>1.</td>
                  <th scope='row'>Sari Football Club</th>
                  <td>8</td>
                  <td>+16</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <th scope='row'>Beyom Football Club</th>
                  <td>8</td>
                  <td>+13</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <th scope='row'>Union Wonders SC</th>
                  <td>8</td>
                  <td>+11</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <th scope='row'>Gomda Football CLub</th>
                  <td>8</td>
                  <td>+7</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <th scope='row'>Woribogu Football Club</th>
                  <td>8</td>
                  <td>+9</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <th scope='row'>Tali Football Club</th>
                  <td>8</td>
                  <td>+7</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <th scope='row'>Kpachi Football Club</th>
                  <td>8</td>
                  <td>+5</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <th scope='row'>Shooting Star B</th>
                  <td>8</td>
                  <td>-5</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <th scope='row'>Gbulahigu F.C</th>
                  <td>8</td>
                  <td>-15</td>
                  <td>3</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td></td>
                  <td colspan='6'>Promotion</td>
                </tr>

                <tr>
                  <td></td>
                  <td colspan='6'>Relegation Zone</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default LeagueTable
