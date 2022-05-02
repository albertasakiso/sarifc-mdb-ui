import React from 'react'
import styles from './FixtureCard.module.css'
import sarifc_logo from '../../assets/icons/sarifc_logo_new.png'
import tali from '../../assets/icons/tali_logo.png'
import beyom from '../../assets/icons/beyom_logo.jpg'
import kpachi from '../../assets/icons/kpachi_logo.jpg'
import gomda from '../../assets/icons/gomda_logo.png'
import unionwonders from '../../assets/icons/union_wonders_sc_logo.png'
import worribogu from '../../assets/icons/woribogu_logo.png'
import tolonfa from '../../assets/icons/tdfa.jpg'
import gfa from '../../assets/icons/gfa_logo.jpg'
// import nrfa from '../../assets/icons/sarifc_logo_new.png'
import grandmaster1 from '../../assets/icons/grandmaster_logo.jpg'
import grandmaster2 from '../../assets/icons/grandmaster_no_background.png'
import advert1 from '../../assets/icons/add21.jpg'
import advert2 from '../../assets/icons/asakiso_logo.jpg'

function FixtureCard() {
  return (
    <>
      <div>
        <div className='row bg-light pt-4 d-flex justify-content-center overflow-hidden'>
          <div className=' col-sm-12 col-md-6 col-lg me-1 ms-2'>
            <div className={styles.fixcard}>
              <div className={styles['fixcard-content']}>
                <div className={styles.fixteams}>
                  <p>Sari Football Club</p>
                  <p />
                  <p>Union Wonders SC</p>
                </div>
                <div className={styles.fixscores}>
                  <img src={sarifc_logo} alt='sari fc' height={100} />
                  <p className={styles['fixvs-future']}>vs</p>
                  <img src={unionwonders} alt='union wonders' height={100} />
                </div>
                <div className={styles.fixlocations}>
                  <span>
                    <i className='fas fa-map-marker-alt' /> S.A.R.I Park
                  </span>
                  <span />
                  <span>
                    <i className='' /> Friendly Match
                  </span>
                </div>
              </div>
              <div className={styles['fixcard-footer']}>
                <i className='far fa-calendar-alt' /> Monday, May 2
                <span className={styles['fixfloat-right']}>
                  <i className='far fa-clock' /> 3:30 PM
                </span>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg me-1 ms-2'>
            <div className={styles.fixcard}>
              <div className={styles['fixcard-content']}>
                <div className={styles.fixteams}>
                  <p>Sari Football Club</p>
                  <p />
                  <p>Woribogu F.C</p>
                </div>
                <div className={styles.fixscores}>
                  <img src={sarifc_logo} alt='sari fc' height={100} />
                  <p className={styles['fixvs-future']}>vs</p>
                  <img src={worribogu} alt='union wonders' height={100} />
                </div>
                <div className={styles.fixlocations}>
                  <span>
                    <i className='fas fa-map-marker-alt' /> S.A.R.I Park
                  </span>
                  <span />
                  <span>
                    <i className='fas fa-location-arrow' /> Nyankpala
                  </span>
                </div>
              </div>
              <div className={styles['fixcard-footer']}>
                <i className='far fa-calendar-alt' /> Monday, May 2
                <span className={styles['fixfloat-right']}>
                  <i className='far fa-clock' /> 3:30 PM
                </span>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg me-1 ms-2'>
            <div className={styles.fixcard}>
              <div className={styles['fixcard-content']}>
                <div className={styles.fixteams}>
                  <p>Kpachi Football Club</p>
                  <p />
                  <p>Sari Football Club</p>
                </div>
                <div className={styles.fixscores}>
                  <img src={kpachi} alt='sari fc' height={100} />
                  <p className={styles['fixvs-future']}>vs</p>
                  <img src={sarifc_logo} alt='union wonders' height={100} />
                </div>
                <div className={styles.fixlocations}>
                  <span>
                    <i className='fas fa-map-marker-alt' /> Kpachi Park
                  </span>
                  <span />
                  <span>
                    <i className='fas fa-location-arrow' /> Kpachi UDS
                  </span>
                </div>
              </div>
              <div className={styles['fixcard-footer']}>
                <i className='far fa-calendar-alt' /> Monday, May 2
                <span className={styles['fixfloat-right']}>
                  <i className='far fa-clock' /> 3:30 PM
                </span>
              </div>
            </div>
          </div>
          {/* <div className='col  me-1 ms-2'>
            <div className={styles.fixcard}>
              <div className={styles['fixcard-content']}>
                <div className={styles.fixteams}>
                  <p>Gomda Football Club</p>
                  <p />
                  <p>Sari Football Club</p>
                </div>
                <div className={styles.fixscores}>
                  <img src={gomda} alt='sari fc' height={100} />
                  <p className={styles['fixvs-future']}>vs</p>
                  <img src={sarifc_logo} alt='union wonders' height={100} />
                </div>
                <div className={styles.fixlocations}>
                  <span>
                    <i className='fas fa-map-marker-alt' /> Tolon Park
                  </span>
                  <span />
                  <span>
                    <i className='fas fa-location-arrow' />
                    Tolon
                  </span>
                </div>
              </div>
              <div className={styles['fixcard-footer']}>
                <i className='far fa-calendar-alt' /> Monday, May 2
                <span className={styles['fixfloat-right']}>
                  <i className='far fa-clock' /> 3:30 PM
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default FixtureCard
