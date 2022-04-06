import React from 'react';
import iconMobil from '../../assets/img/fi_car.png';
import iconUser from '../../assets/icon/fi_users.svg';
import iconSetting from '../../assets/icon/fi_settings.svg';
import iconCalendar from '../../assets/icon/fi_calendar.svg';

export default function Search() {
  return (
    <section className="page-search">
      <div className="row">
        <div className="col head"></div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            {/* Box Form */}
            <div className="box">
              <div className="row">
                <div className="col">
                  <p><strong>Pencarianmu</strong></p>
                </div>
              </div>
              <div className="row row-input">
                <div className="col-auto">
                  <span>Tipe Driver</span>
                  <div className="input-group">
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Pilih Tipe Driver</option>
                      <option value="1">Dengan Supir</option>
                      <option value="2">Tanpa Supir (Lepas Kunci)</option>
                    </select>
                  </div>
                </div>
                <div className="col-auto">
                  <span>Tanggal</span>
                  <div className="input-group">
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div className="col-auto">
                  <span>Waktu Jemput/Ambil</span>
                  <div className="input-group">
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Pilih Waktu</option>
                      <option value="1">08.00 WIB</option>
                      <option value="2">09.00 WIB</option>
                      <option value="3">10.00 WIB</option>
                      <option value="4">11.00 WIB</option>
                      <option value="5">12.00 WIB</option>
                    </select>
                  </div>
                </div>
                <div className="col-auto">
                  <span>Jumlah Penumpang (optional)</span>
                  <div className="input-group">
                    <input type="number" className="form-control" placeholder="Jumlah Penumpang" />
                  </div>
                </div>
                <div className="col-auto align-self-end">
                  <button className="btn btn-edit">Edit</button>
                </div>
              </div>
            </div>
            {/* End Box Form */}
            <div className="card-mobil mt-4">
              <div className="row">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                              <img src={iconMobil} alt="img-car" />
                          </h5>
                          <p>Nama/Tipe Mobil</p>
                          <h6>Rp 430.000 / hari</h6>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae.</p>
                          <p class="card-text">
                              <img src={iconUser} alt="icon-key" />4 Orang
                          </p>
                          <p class="card-text">
                              <img src={iconSetting} alt="icon-clock" />Manual
                          </p>
                          <p class="card-text">
                              <img src={iconCalendar} alt="icon-clock" />Tahun 2020
                          </p>
                          <div class="btn-group" aria-label="Basic example">
                              <button type="button" class="btn btn-pilih">Pilih Mobil
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
