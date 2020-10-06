import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterAgent } from "../../../Actions/index";
class AgentRegister extends Component {
  state = {
    firstName: "",
    lastName: "",
    cnicNumber: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    company: "",
    licenseNo: "",
    companyEmail: "",
    TelNo: "",
    mobNumber: "",
    address: "",
    province: "",
    district: "",
    tehsil: "",
    iataVerify: "",
    IataNo: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const agent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      cnic: this.state.cnicNumber,
      email: this.state.email,
      username: this.state.userName,
      password: this.state.password,
      password_confirm: this.state.confirmPassword,
      companyName: this.state.company,
      licenseNo: this.state.licenseNo,
      companyEmail: this.state.companyEmail,
      telNo: this.state.TelNo,
      mobileNo: this.state.mobNumber,
      address: this.state.address,
      province: this.state.province,
      district: this.state.district,
      tehsil: this.state.tehsil,
      iataVerify: this.state.iataVerify,
      iataNo: this.state.IataNo,
    };

    this.props.RegisterAgent(agent);
    this.setState({
      firstName: "",
      lastName: "",
      cnicNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      company: "",
      licenseNo: "",
      companyEmail: "",
      TelNo: "",
      mobNumber: "",
      address: "",
      province: "",
      district: "",
      tehsil: "",
      iataVerify: "",
      IataNo: "",
    });
  };
  render() {
    return (
      <div className="bg-light pt-3">
        <h1 className="text-center"> AGENTS REGISTERATION FORM</h1>

        <div className="container">
          <form>
            <div className="form-group  w-25 ">
              <label htmlFor="agentId">Agent ID </label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                name="agentId"
                id="agentId"
              />
            </div>
            <div className="row">
              <div className="col-sm-6  col-lg-4">
                <div className="form-group">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    className="form-control"
                    id="FirstName"
                    name="firstName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="LastName">Last Name </label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    className="form-control"
                    id="LastName"
                    name="lastName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CNIC"> CNIC Number</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.cnicNumber}
                    className="form-control"
                    name="cnicNumber"
                    id="CNIC"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CNIC"> Passport Number</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.passNumber}
                    className="form-control"
                    name="cnicNumber"
                    id="CNIC"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"> User Name</label>
                  <input
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    value={this.state.userName}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="re-enter-password">Re-Enter Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                    className="form-control"
                    id="re-enter-password"
                  />
                </div>
              </div>

              <div className="col-sm-6  col-lg-4">
                <div className="form-group ">
                  <label htmlFor="address">Enter Address</label>
                  <input
                    className="form-control"
                    style={{ height: "150px" }}
                    type="file"
                    name="logo"
                    id=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CompanyName">Company Full Name</label>
                  <input
                    type="text"
                    name="company"
                    onChange={this.handleChange}
                    value={this.state.company}
                    className="form-control"
                    id="CompanyName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="licenseNo">License Number</label>
                  <input
                    type="text"
                    name="licenseNo"
                    onChange={this.handleChange}
                    value={this.state.licenseNo}
                    className="form-control"
                    id="licenseNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyemail">Company Email</label>
                  <input
                    type="email"
                    name="companyEmail"
                    onChange={this.handleChange}
                    value={this.state.companyEmail}
                    className="form-control"
                    id="companyemail"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="telNo">Mob. Number</label>
                  <div className="input-group ">
                    <div className="input-group-prepend ">
                      <div className="input-group-text">+92</div>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.mobNumber}
                      className="form-control "
                      id="telNo"
                      name="TelNo"
                      placeholder="Tel No"
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="mobNo">Whatsapp Number</label>
                  <div className="input-group ">
                    <div className="input-group-prepend ">
                      <div className="input-group-text">+92</div>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.whatsappNumber}
                      name="mobNumber"
                      className="form-control "
                      id="mobNo"
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="mobNo">Landline Number</label>
                  <div className="input-group ">
                    <input
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.telNo}
                      name="mobNumber"
                      className="form-control "
                      id="mobNo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6  col-lg-4">
                <div className="form-group ">
                  <label htmlFor="address">Enter Address</label>
                  <textarea
                    rows="5"
                    style={{ resize: "none" }}
                    cols="10"
                    value={this.state.address}
                    className="form-control"
                    id="address"
                    onChange={this.handleChange}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="provinceName">Province.</label>
                  <select
                    name="province"
                    value={this.state.province}
                    onChange={this.handleChange}
                    className="form-control"
                    id="provinceName"
                  >
                    <option>Select</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>KPK</option>
                    <option>Balochistan</option>
                    <option>Gilgit-Baltistan</option>
                    <option>AJK</option>
                    <option>Federal</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="district"> District</label>
                  <select
                    name="district"
                    onChange={this.handleChange}
                    className="form-control"
                    id="district"
                  >
                    {this.state.province === "Punjab" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Attock</option>
                        <option>Jhelum</option>
                        <option>Chakwal</option>
                        <option>Sargodha</option>
                        <option>Bhakker</option>
                        <option>Khushab</option>
                        <option>Mianwali</option>
                        <option>Faisalabad</option>
                        <option>Jhang</option>
                        <option>Chiniot</option>
                        <option>Toba Tek Singh</option>
                        <option>Gujranwala</option>
                        <option>Hafizabad</option>
                        <option>Mandi Bahauddin</option>
                        <option>Gujrat</option>
                        <option>Sialkot</option>
                        <option>Narowal</option>
                        <option>Lahore</option>
                        <option>Kasur</option>
                        <option>Sheikhupura</option>
                        <option>Nankana Sahib</option>
                        <option>Sahiwal</option>
                        <option>Okara</option>
                        <option>Pakpattan</option>
                        <option>Multan</option>
                        <option>Vehari</option>
                        <option>Lodhran</option>
                        <option>Khanewal</option>
                        <option>Dera Ghazi Khan</option>
                        <option>Rajanpur</option>
                        <option>Layyah</option>
                        <option>Muzaffargarh</option>
                        <option>Bahawalnagar</option>
                        <option>Rahim Yar Khan</option>
                        <option>Rawalpindi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "Sindh" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Larkana</option>
                        <option>Kashmore</option>
                        <option>Shikarpur</option>
                        <option>Jacobabad</option>
                        <option>Kambar Shahdadkot</option>
                        <option>Sukkar</option>
                        <option>Ghotki </option>
                        <option>Khairpur Mirs</option>
                        <option>Shaheed Benazirabad</option>
                        <option>Naushahro Feroze</option>
                        <option> Sanghar</option>
                        <option>Hyderabad</option>
                        <option>Jamshoro</option>
                        <option>Dadu</option>
                        <option>Matiari</option>
                        <option>Tando Allahyar</option>
                        <option>Tando Muhammad Khan</option>
                        <option>Badin</option>
                        <option>Thatta</option>
                        <option>Sujawal</option>
                        <option>Mirpur Khas</option>
                        <option>Tharparkar</option>
                        <option>UmerKot</option>
                        <option>Karachi East</option>
                        <option>Karachi West</option>
                        <option>Karachi South</option>
                        <option>Karachi Central</option>
                        <option>Malir</option>
                        <option>Korangi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "KPK" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chitral</option>
                        <option>Upper Dir (At Dir)</option>
                        <option>Lower Dir (At Temergara) </option>
                        <option>Swat (At Mingora)</option>
                        <option>Buner</option>
                        <option>Malakand (Pata Administered)</option>
                        <option>Kohistan</option>
                        <option>Mansehra</option>
                        <option>Torghar (At Oghi)</option>
                        <option>Batagram (At Bana)</option>
                        <option>Abbottabad</option>
                        <option>Haripur</option>
                        <option>Mardan</option>
                        <option>Swabi</option>
                        <option>Charsadda</option>
                        <option>Peshawar</option>
                        <option>Nowshera</option>
                        <option>Kohat</option>
                        <option>Bannu</option>
                        <option>Lakki Marwat</option>
                        <option>Dera Ismail Khan</option>
                        <option>Tank</option>
                        <option>Bajaur</option>
                        <option>Mohmand</option>
                        <option>Khyber</option>
                        <option>Kurram</option>
                        <option>Orakzai</option>
                        <option>North Waziristan</option>
                        <option>South Waziristan</option>
                        <option>Ex-Frontier Regions</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "Balochistan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Awaran</option>
                        <option>Kalat</option>
                        <option>Kharan</option>
                        <option>Khuzdar</option>
                        <option>Lasbela</option>
                        <option>Mastung</option>
                        <option>Washuk</option>
                        <option>Gwadar</option>
                        <option>Kech</option>
                        <option>Panjgur</option>
                        <option>Jafarabad</option>
                        <option>Jhal Magsi</option>
                        <option>Kachi</option>
                        <option>Lehri</option>
                        <option>Nasirabad</option>
                        <option>Sohbatpur</option>
                        <option>Chagai</option>
                        <option>Killa Abdullah</option>
                        <option>Nushki</option>
                        <option>Pishin</option>
                        <option>Quetta</option>
                        <option>Dera Bugti</option>
                        <option>Harnai</option>
                        <option>Kohlu</option>
                        <option>Sibi</option>
                        <option>Ziarat</option>
                        <option>Barkhan</option>
                        <option>Killa Saifullah</option>
                        <option>Loralai</option>
                        <option>Musakhel</option>
                        <option>Sherani</option>
                        <option>Zhob</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "Gilgit-Baltistan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gilgit</option>
                        <option>Ghizer</option>
                        <option>Hunza</option>
                        <option>Nagar</option>
                        <option>Skardu</option>
                        <option>Rondu</option>
                        <option>Tangir</option>
                        <option>Ghanche</option>
                        <option>Diamir</option>
                        <option>Astore</option>
                        <option>Darel</option>
                        <option>Gopis Yasin</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "AJK" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhimber</option>
                        <option>Kotli</option>
                        <option>Mirpur</option>
                        <option>Jhelum Valley District</option>
                        <option>Muzaffarabad</option>
                        <option>Neelum Valley District</option>
                        <option>Bagh</option>
                        <option>Haveli</option>
                        <option>Poonch</option>
                        <option>Sudhnoti</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.province === "Federal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Federal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="town">Tehsil</label>
                  <select
                    onChange={this.handleChange}
                    name="tehsil"
                    id="town"
                    className="form-control"
                  >
                    {this.state.district === "Attock" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Attock </option>
                        <option>Fateh Jang</option>
                        <option>HasanAbdal</option>
                        <option>Hazro</option>
                        <option>Jand</option>
                        <option>Pindi Gheb</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jhelum" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dina </option>
                        <option>Jhelum</option>
                        <option>Pind Dadan Khan</option>
                        <option>Sohawa</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Chakwal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chakwal </option>
                        <option>Choa Saidan Shah</option>
                        <option>Kallar Kahar</option>
                        <option>Lawa</option>
                        <option>Talagang</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sargodha" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhalwal </option>
                        <option>Bhera</option>
                        <option>Kot Momin</option>
                        <option>Sahiwal</option>
                        <option>Sargodha</option>
                        <option>Shahpur</option>
                        <option>Sillanwali</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bhakker" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhakkar </option>
                        <option>Darya Khan</option>
                        <option>Kalur Kot</option>
                        <option>Mankera</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Khushab" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Khushab </option>
                        <option>Nurpur Thal</option>
                        <option>Quaidabad</option>
                        <option>Naushera</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mianwali" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Isa Khel </option>
                        <option>Mianwali</option>
                        <option>Piplan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Faisalabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chak Jhumra </option>
                        <option>Faisalabad City</option>
                        <option>Faisalabad Sadar</option>
                        <option>Jaranwala</option>
                        <option>Sammundri</option>
                        <option>Tandlian Wala</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jhang" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>18-Hazari </option>
                        <option>Ahmadpur Sial</option>
                        <option>Jhang</option>
                        <option>ShorKot</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Chiniot" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhawanna </option>
                        <option>Chiniot</option>
                        <option>Lalian</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Toba Tek Singh" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gojra </option>
                        <option>Kamalia</option>
                        <option>Pirmahal</option>
                        <option>Toba Tek Singh</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Gujranwala" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gujranwala City </option>
                        <option>Gujranawala Saddar</option>
                        <option>Kamoke</option>
                        <option>Nowshera Virkan</option>
                        <option>Wazirabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Hafizabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hafizabad </option>
                        <option>Pindi bhattian</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mandi Bahauddin" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Malakwal </option>
                        <option>Mandi Bahauddin</option>
                        <option>Phalia</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Gujrat" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gujrat</option>
                        <option>Kharian</option>
                        <option>Sarai Alamgir</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sialkot" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Daska </option>
                        <option>Pasrur</option>
                        <option>Sambrial</option>
                        <option>SialKot</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Narowal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Narowal </option>
                        <option>Shakargarh</option>
                        <option>Zafarwal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lahore" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Lahore Cantt </option>
                        <option>Lahore City</option>
                        <option>Model Town</option>
                        <option>Raiwind</option>
                        <option>Shalimar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kasur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chunian</option>
                        <option>Kasur</option>
                        <option>Kot Radha Kishan</option>
                        <option>Pattoki</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sheikhupura" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Firozewala</option>
                        <option>Muridke</option>
                        <option>Safarabad</option>
                        <option>Sharak Pur</option>
                        <option>Sheikhupura</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Nankana Sahib" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Nankana Sahib</option>
                        <option>Sangla Hill</option>
                        <option>Shah Kot</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sahiwal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chichawatni</option>
                        <option>Sahiwal</option>
                        <option>noor Shah</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Okara" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>DepalPur</option>
                        <option>Okara</option>
                        <option>Renala Khurd</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Pakpattan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Arifwala</option>
                        <option>Pakpattan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Multan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Jalapur Pirwala</option>
                        <option>Multan City</option>
                        <option>Multan Saddar</option>
                        <option>Shujabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Vehari" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Burewala</option>
                        <option>Mailsi</option>
                        <option>Vehari</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lodhran" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dunyapur</option>
                        <option>Kahror Pacca</option>
                        <option>Lodhran</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Khanewal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Jahanian</option>
                        <option>Kabirwala</option>
                        <option>Khanewal</option>
                        <option>Mian Channu</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Dera Ghazi Khan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>De-Excluded Area D.G.Khan </option>
                        <option>Dera Ghazi Khan</option>
                        <option>Kot Chatta</option>
                        <option>Koh-e-Suleman</option>
                        <option>Taunsa</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Rajanpur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>De-Excluded Area RajanPur </option>
                        <option>Jampur</option>
                        <option>Rajanpur</option>
                        <option>Rojhan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Layyah" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chaubara </option>
                        <option>Karor Lal Esan</option>
                        <option>Layyah</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Muzaffargarh" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Alipur </option>
                        <option>jatoi</option>
                        <option>Kot Addu</option>
                        <option>Muzaffargarh</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bahawalpur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ahmadpur East</option>
                        <option>Bahawalpur City</option>
                        <option>Bahawalpur Saddar</option>
                        <option>Hasilpur</option>
                        <option>Khairpur Tamewali</option>
                        <option>Yazman</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bahawalnagar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bahawalnagar</option>
                        <option>Chishtian</option>
                        <option>Fort Abbas</option>
                        <option>haroonabad</option>
                        <option>Minchinabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Rahim Yar Khan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>KhanPur</option>
                        <option>Liaquatpur</option>
                        <option>Rahim Yar Khan</option>
                        <option>Sadiqabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Rawalpindi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Rawalpindi</option>
                        <option>Gujar Khan</option>
                        <option>Kahuta</option>
                        <option>Kallar Syedan</option>
                        <option>Kotli Sattian</option>
                        <option>Murree</option>
                        <option>Texila</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}

                    {/* Sindh */}
                    {this.state.district === "Larkana" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bakrani</option>
                        <option>Dokri</option>
                        <option>Larkana</option>
                        <option>Rato Dero</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kashmore" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kandhkot</option>
                        <option>Kashmore</option>
                        <option>Tangwani</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Shikarpur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ghari Yasin</option>
                        <option>Khanpur</option>
                        <option>Lakhi</option>
                        <option>Shikarpur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jacobabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ghari Khairo</option>
                        <option>Jacobabad</option>
                        <option>Thul</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kambar Shahdadkot" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Miro Khan</option>
                        <option>Nasirabad</option>
                        <option>Qubo Saeed Khan</option>
                        <option>Shahdadkot</option>
                        <option>Sijawal Junejo</option>
                        <option>Warah</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sukkar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>New Sukkar</option>
                        <option>Pano Aqil</option>
                        <option>Rohri</option>
                        <option>Salehpat</option>
                        <option>Sukkar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Ghotki" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Daharki</option>
                        <option>Ghotki</option>
                        <option>Khangarh (KhanPur)</option>
                        <option>Mirpur Mathelo</option>
                        <option>Ubauro</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Khairpur Mirs" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Faiz Ganj</option>
                        <option>Gambat</option>
                        <option>Khairpur Mirs</option>
                        <option>Kingri</option>
                        <option>Kot Diji</option>
                        <option>Nara</option>
                        <option>Sobhodero</option>
                        <option>Thari Mirwah</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Shaheed Benazirabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Daulatpur (Qazi Ahmed)</option>
                        <option>Daur</option>
                        <option>Nawabshah</option>
                        <option>Sakrand</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Naushahro Feroze" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhiria</option>
                        <option>Kandioro</option>
                        <option>Mehrapur</option>
                        <option>Moro</option>
                        <option>Naushahro Feroze</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sanghar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Jam Nawaz Ali</option>
                        <option>Khipro</option>
                        <option>Shahdadpur</option>
                        <option>Sinjhoro</option>
                        <option>Tando Adam</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Hyderabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hyderabad City</option>
                        <option>Hyderabad Saddar</option>
                        <option>Latifabad</option>
                        <option>Qasimabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jamshoro" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kotri</option>
                        <option>Manjhand</option>
                        <option>Sehwan Sharif</option>
                        <option>Thano Bula Khan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Dadu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dadu</option>
                        <option>Johi</option>
                        <option>Khairpur Nathan Shah</option>
                        <option>Mehar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Matiari" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hala</option>
                        <option>Matiari</option>
                        <option>Saeedabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Tando Allahyar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chamber</option>
                        <option>Jhando Mari</option>
                        <option>Tando Allahyar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Tando Muhammad Khan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bulri Shah Karim</option>
                        <option>Tando Ghulam Hyder</option>
                        <option>Tando Mohammad Khan </option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Badin" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Badin</option>
                        <option>Nindo Shaher</option>
                        <option>Khoski</option>
                        <option>Golarchi</option>
                        <option>Matli</option>
                        <option>Shaheed Fazal Rahu</option>
                        <option>Talhar</option>
                        <option>Tabdo Bago</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Thatta" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ghorabari</option>
                        <option>Keti Bunder</option>
                        <option>Mirpur Sakro</option>
                        <option>Thatta</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sujawal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Jati</option>
                        <option>Kharo Chan</option>
                        <option>Mirpur Bathoro</option>
                        <option>Shah Bunder</option>
                        <option>Sujawal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mirpur Khas" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Digri</option>
                        <option>Hussain bux Marri</option>
                        <option>Jhuddo</option>
                        <option>Kot Ghulam Mohammad</option>
                        <option>Mirpur Khas</option>
                        <option>Shujabad</option>
                        <option>Sindhri</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Tharparkar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chachro</option>
                        <option>Dhali</option>
                        <option>Diplo</option>
                        <option>Kaloi</option>
                        <option>Islamkot</option>
                        <option>Mithi</option>
                        <option>Nagarparkar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "UmerKot" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kunri</option>
                        <option>Pithoro</option>
                        <option>Samaro</option>
                        <option>Umerkot</option>
                        <option>Uthman Kot</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Karachi East" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gulshan Town</option>
                        <option>Jamshed Town</option>
                        <option>Ferozabad</option>
                        <option>Gulshan-E-Iqbal</option>
                        <option>Gulzar-E-Hijri</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Karachi West" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Baldia Town</option>
                        <option>Kiamari Town</option>
                        <option>S.I.T.E. Town</option>
                        <option>Orangi Town</option>
                        <option>Harbour</option>
                        <option>Manghopir</option>
                        <option>Maripur</option>
                        <option>Mominadad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Karachi South" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Lyari Town</option>
                        <option>Saddar Town</option>
                        <option>Aram Bahg</option>
                        <option>Civil Line</option>
                        <option>Garden</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Karachi Central" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gulberg Town</option>
                        <option>Liaquatabad Town</option>
                        <option>New Karachi Town</option>
                        <option>North Nazimabad Town</option>
                        <option>Nazimabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Malir" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bin Qasim Town</option>
                        <option>Gadap Town</option>
                        <option>Malir Town</option>
                        <option>Jinnah</option>
                        <option>Ibrahim Hyderi</option>
                        <option>Murad Memon</option>
                        <option>Shah Murad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Korangi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Korangi Town</option>
                        <option>Landhi Town</option>
                        <option>Shah Faisal Town</option>
                        <option>Madel Colony</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}

                    {/* KPK  */}
                    {this.state.district === "Chitral" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Mastuj</option>
                        <option>Chitral</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Upper Dir (At Dir)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dir</option>
                        <option>Sharingal</option>
                        <option>Wari</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lower Dir (At Temergara)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Adenzal</option>
                        <option>Lal Qila</option>
                        <option>Samarbagh</option>
                        <option>Timergara</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Swat (At Mingora)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Babuzai(Swat)</option>
                        <option>Barikot</option>
                        <option>Behrain</option>
                        <option>Charbagh</option>
                        <option>Kabal</option>
                        <option>Khawaza khela</option>
                        <option>Matta</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Shangla (At Alpuri)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Alpuri</option>
                        <option>Bisham</option>
                        <option>Puram</option>
                        <option>Chakesar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Buner" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Daggar(Buner)</option>
                        <option>Ghara</option>
                        <option>khudu Khel</option>
                        <option>Mandanr</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Malakand (Pata Administered)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Sam Rani Zal</option>
                        <option>Swat Rani Zal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kohistan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bankad</option>
                        <option>Pattan</option>
                        <option>Dassu</option>
                        <option>Kandia</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mansehra" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Balakot</option>
                        <option>Mansehra</option>
                        <option>Oghi</option>
                        <option>Baffa Pakhal</option>
                        <option>Darband</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Torghar (At Oghi)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Judbu</option>
                        <option>Khandar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Batagram (At Bana)" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Allai</option>
                        <option>Batagram(Banna)</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Abbottabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Abbottabad</option>
                        <option>Havalian</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Haripur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ghazi</option>
                        <option>Haripur</option>
                        <option>Khanpur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mardan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Mardan</option>
                        <option>Takhtbhai</option>
                        <option>Katlang</option>
                        <option>Rastam</option>
                        <option>Lund Khawar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Swabi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Lahor</option>
                        <option>Razar</option>
                        <option>Swabi</option>
                        <option>Topi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Charsadda" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Charsadda</option>
                        <option>Shabqadar</option>
                        <option>Tangi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Peshawar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Peshawar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Nowshera" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Jahangira</option>
                        <option>Nowshera</option>
                        <option>Pabbi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kohat" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kohat</option>
                        <option>Lachi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Hangu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hangu</option>
                        <option>Tall</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Karak" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Banda Daud Shah</option>
                        <option>Karak</option>
                        <option>Takht-e-Nasrati</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bannu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bannu</option>
                        <option>Domel</option>
                        <option>Kaki</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lakki Marwat" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Lakki Marwat</option>
                        <option>Sari Naurang</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Dera Ismail Khan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dera Ismail Khan </option>
                        <option>Daraban</option>
                        <option>Kulachi</option>
                        <option>Paharpar</option>
                        <option>Paroa</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Tank" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Tank</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bajaur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bajaur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mohmand" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Mohmand</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Khyber" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Khyber</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kurram" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kurram</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Orakzai" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Orakzai</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "North Waziristan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>North Waziristan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "South Waziristan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>South Waziristan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Ex-Frontier Regions" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ex-Frontier Regions</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}

                    {/* Balochistan */}
                    {this.state.district === "Awaran" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Awaran</option>
                        <option>Gishkore</option>
                        <option>Jhal Jhao</option>
                        <option>Korak Jahoo</option>
                        <option>Mashkal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kalat" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kalat</option>
                        <option>Mangochar</option>
                        <option>Surab</option>
                        <option>Gazg</option>
                        <option>Johan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kharan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kharan</option>
                        <option>Sar-Kharan</option>
                        <option>Tohumulk</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Khuzdar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Khuzdar</option>
                        <option>Nall</option>
                        <option>Wadh</option>
                        <option>Zehri</option>
                        <option>Baghbana</option>
                        <option>Aranji</option>
                        <option>Greshek</option>
                        <option>Karakh</option>
                        <option>Moola</option>
                        <option>Ornach</option>
                        <option>Saroona</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lasbela" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bela</option>
                        <option>Dureji</option>
                        <option>Gaddani</option>
                        <option>Hub</option>
                        <option>Kanraj</option>
                        <option>Lakhra</option>
                        <option>Sonmiant(Winder)</option>
                        <option>Uthal</option>
                        <option>Liari</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mastung" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dasht</option>
                        <option>Mastung</option>
                        <option>Khad Koocha</option>
                        <option>Kirdgap</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Washuk" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Besima</option>
                        <option>Mashkhel</option>
                        <option>Washuk</option>
                        <option>Nag</option>
                        <option>Shahgori</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Gwadar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gwadar</option>
                        <option>Jiwani</option>
                        <option>Ormara</option>
                        <option>Pasni</option>
                        <option>Suntsar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kech" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Mand</option>
                        <option>Tump</option>
                        <option>Turbat</option>
                        <option>Balnigor</option>
                        <option>Buleda</option>
                        <option>Dasht</option>
                        <option>Hoshab</option>
                        <option>Zamuran</option>
                        <option>Dandaar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Panjgur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gowargo</option>
                        <option>Panjgur</option>
                        <option>Paroom</option>
                        <option>Gichk</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jafarabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gandakha</option>
                        <option>Jhat Pat</option>
                        <option>Usta Mohammad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jhal Magsi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gandawa</option>
                        <option>Jhal Magsi</option>
                        <option>Mirpur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kachi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dhadar</option>
                        <option>Balanari</option>
                        <option>Khattan</option>
                        <option>Mach</option>
                        <option>Sanni</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Lehri" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhag</option>
                        <option>Lehri</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Nasirabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Baba Kot</option>
                        <option>Dera Murad Jamali</option>
                        <option>Tamboo</option>
                        <option>Chattar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sohbatpur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Faridabad</option>
                        <option>Hayrvi</option>
                        <option>Manjipur</option>
                        <option>Sohbatpur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Chagai" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dalbandin</option>
                        <option>Nokundi</option>
                        <option>Taftan</option>
                        <option>Chagai</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Killa Abdullah" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chaman</option>
                        <option>Gulistan</option>
                        <option>Killa Abdullah</option>
                        <option>Dobani</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Nushki" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Nushki</option>
                        <option>Dak</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Pishin" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hurramzai</option>
                        <option>Karezat</option>
                        <option>Pishin</option>
                        <option>Saranan</option>
                        <option>Barshore</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Quetta" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Chiltan</option>
                        <option>Zarghoon</option>
                        <option>Panjpai</option>
                        <option>Sibi Division</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Dera Bugti" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dera Bugti</option>
                        <option>Phelawagh</option>
                        <option>Sui</option>
                        <option>Balker</option>
                        <option>Loti</option>
                        <option>Malam</option>
                        <option>Pir Koh</option>
                        <option>Sangsillah</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Harnai" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Harnai</option>
                        <option>Sharigh</option>
                        <option>Khoast</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kohlu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kahan</option>
                        <option>Kohlu</option>
                        <option>Maiwand</option>
                        <option>Grisini</option>
                        <option>Tamboo</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sibi" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Sibi</option>
                        <option>kutmandal</option>
                        <option>Sangan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Ziarat" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ziarat</option>
                        <option>Sinjavi</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Barkhan" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Barkhan</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Killa Saifullah" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Killa Saifullah</option>
                        <option>Loiband</option>
                        <option>Muslim Bagh</option>
                        <option>Badini</option>
                        <option>Kanmetherzai</option>
                        <option>Shinki</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Loralai" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bori</option>
                        <option>Duki</option>
                        <option>Loralai</option>
                        <option>Mekhtar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Musakhel" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Drug</option>
                        <option>Kingri</option>
                        <option>Musakhel</option>
                        <option>Toisar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sherani" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Sherani</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Zhob" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Qamar Din Karez</option>
                        <option>Zhob</option>
                        <option>Ashwat</option>
                        <option>Kashatu</option>
                        <option>Sambaza</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {/* GIlGit */}
                    {this.state.district === "Gilgit" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Danyor</option>
                        <option>Gilgit</option>
                        <option>Juglot</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Ghizer" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gahkoch</option>
                        <option>Punial</option>
                        <option>Phander</option>
                        <option>Teru</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Hunza" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Ali Abad</option>
                        <option>Gojal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Nagar" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Nagar-I</option>
                        <option>Nagar-II</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Skardu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gultari</option>
                        <option>Kharmang</option>
                        <option>Shigar</option>
                        <option>Skardu</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Rondu" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Rhondu</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Tangir" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Tangir</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Ghanche" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Doghoni Balghar</option>
                        <option>Khaplu</option>
                        <option>Mashabrum</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Diamir" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Babu Sar</option>
                        <option>Chilas</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Astore" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Astore</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Darel" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Darel</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Gopis Yasin" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Gupis</option>
                        <option>Ishkoman</option>
                        <option>Yasin</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}

                    {/* AJK */}
                    {this.state.district === "Bhimber" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bhimber</option>
                        <option>Barnala</option>
                        <option>Smahni</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Kotli" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Kotli</option>
                        <option>Khuiratta</option>
                        <option>Nakyal</option>
                        <option>Sehnsa</option>
                        <option>Charoi</option>
                        <option>Davi Gali</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Mirpur" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Dadyal</option>
                        <option>Mirpur</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Jhelum Valley District" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Hattian Bala</option>
                        <option>Cikkar</option>
                        <option>Leepa</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Muzaffarabad" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Muzaffarabad</option>
                        <option>Nasirabad</option>
                        <option>GhariDoppatta</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Neelum Valley District" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Athmuqam</option>
                        <option>Sharda</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Bagh" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Bagh</option>
                        <option>Dhirkot</option>
                        <option>HariGehal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Haveli" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Haveli</option>
                        <option>KhurshidAbad</option>
                        <option>Mumtazabad</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Poonch" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Abaspur</option>
                        <option>Hajira</option>
                        <option>Rawalkot</option>
                        <option>Thorar</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {this.state.district === "Sudhnoti" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Baloch</option>
                        <option>Mang</option>
                        <option>Pallandri</option>
                        <option>TararKhal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    {/* Federal */}
                    {this.state.district === "Federal" ? (
                      <React.Fragment>
                        <option>Select</option>
                        <option>Federal</option>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="IATA">IATA / NON IATA</label>
                  <select
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.iataVerify}
                    name="iataVerify"
                    id="IATA"
                  >
                    <option>Select a Value</option>
                    <option>IATA</option>
                    <option>NON IATA </option>
                  </select>
                </div>
                {this.state.iataVerify === "IATA" ? (
                  <React.Fragment>
                    <div className="form-group">
                      <label htmlFor="IATANO"> IATA Number</label>
                      <input
                        type="text"
                        name="IataNo"
                        onChange={this.handleChange}
                        value={this.state.iataNo}
                        className="form-control"
                        id="IATANO"
                      />
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-primary px-4"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    agent: state.AgentRegister,
  };
};

export default connect(mapStateToProps, { RegisterAgent })(AgentRegister);
