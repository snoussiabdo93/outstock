import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cartProducts } from '../../redux/features/cart-slice';
import { doc, setDoc , collection,addDoc } from "firebase/firestore"; 
import { db } from '../../config';

const countries = ['Bangladesh', 'Algeria', 'Afghanistan', 'Ghana', 'Albania', 'Bahrain', 'Colombia', 'Dominican Republic']
const payment_accordion = [
  {
    id: 'headingOne',
    target: 'collapseOne',
    title: ' Direct Bank Transfer',
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    show: true,
  },
  {
    id: 'headingTwo',
    target: 'collapseTwo',
    title: 'Cheque Payment',
    desc: "Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
  },
  {
    id: 'headingThree',
    target: 'collapseThree',
    title: 'PayPal',
    desc: "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  },
]

const CheckoutArea = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [shipBox, setShipBox] = useState(false);
  const cartItems = useSelector(cartProducts);
  const { total } = useCartInfo();
  const [Adresse, setAdresse] = useState('');
  const [Email, setEmail] = useState('');
  const [Tel, setTel] = useState('');

  const [Name, setName] = useState('');
  const [Last, setLast] = useState('');
  const [Country, setcountry] = useState('');
  const [Company, setCompany] = useState('');

const All =()=>{

	for (const i = 0; i < cartItems.length; i++) {

	if (cartItems[i].sizes == 'All') { cartItems[i].sizes=[cartItems[i].Taille1, cartItems[i].Taille2, cartItems[i].Taille3, cartItems[i].Taille4, cartItems[i].Taille5]}  }

}
	const handelSubmit = async () => {

		try {
			All()
			const Lines = []
			for (const i = 0; i < cartItems.length; i++) {
				const Sizes = []

				for (const j = 0; j < cartItems[i].sizes.length; j++) { Sizes.push({ size: cartItems[i].sizes[j], price: 0 }) }

				const line = { Idprod: cartItems[i].id, qts: cartItems[i].quantity, sizes: Sizes, photo: cartItems[i].photo1, Ref: cartItems[i].Freq }
				Lines.push(line)

			}
			const data = { Adresse, Country, Name: Name + " " + Last, Company, Email, Tel, validate: false }
			console.log(Lines)
			const collectionRef = collection(db, "Devis")
			const docADD = await addDoc(collectionRef, data)

			const collRef = collection(docADD, "Lines")
			const addDocumentPromises = Lines.map((data) => addDoc(collRef, data));

			const result = await Promise.all(addDocumentPromises);



		} catch (error) {
			console.log(error)
		}
	}
	  const InputBox = ({ col = 'col-md-12',value, required = true, label, type = 'text', placeholder }) => {
		return (
		  <div className={col}>
			<div className="checkout-form-list">
			  {label && <label>{label} {required && <span className="required">*</span>}</label>}
			  <input required={required}  type={type}  defaultValue={value} placeholder={placeholder}  onBlur ={(e)=>handelchange(e,label)}/>
			</div>
		  </div>
		)
	  }
	  
const handelchange=(e,label)=>{

	switch (label) {
		case 'First Name':
			setName(e.target.value);
		  break;
		case 'Last Name':
			setLast(e.target.value);
		  break;
		case 'Company Name':
			setCompany(e.target.value);
		  break;
		case 'Email Address':
			setEmail(e.target.value);
		  break;
		case 'Phone':
			setTel(e.target.value);
		 
	  }
}


  return (
    <>
      <section className="checkout-area pb-70">
        <div className="container">
          
            <div className="row">
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>Country <span className="required">*</span></label>
                        <select onChange = {(e)=>setcountry(e.target.value)}  >
                          {countryList.map((country, index) => (
                            <option key={index} defaultValue={index}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <InputBox col='col-md-6' value={Name} label={'First Name'} placeholder="First Name"  />
                    <InputBox col='col-md-6' value={Last} label={'Last Name'} placeholder="Last Name"  />
                    <InputBox required={false} value={Company} label={'Company Name'} placeholder="Company Name" />
                    <InputBox col='col-md-6' value={Email} type='email' label={'Email Address'} placeholder="Email Address"  />
                    <InputBox col='col-md-6'value={Tel} label={'Phone'} placeholder="Phone"   />

                    <div className="col-md-12">
                      
                    
                    </div>
                  </div>
                  <div className="different-address">
                   
                    {shipBox && <div id="ship-box-info">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="country-select">
                            <label>Country <span className="required">*</span></label>
                            <select onChange = {(e)=>setcountry(e.target.value)} >
                              {countries.map((country, index) => (
                                <option  key={index} defaultValue={index}>{country}</option>
                              ))}
                            </select>
                          </div>
                        </div>

						<InputBox col='col-md-6' label={'First Name'} placeholder="First Name"  />
                    <InputBox col='col-md-6' label={'Last Name'} placeholder="Last Name"  />
                    <InputBox required={false} label={'Company Name'} placeholder="Company Name" />
                    <InputBox col='col-md-6' type='email' label={'Email Address'} placeholder="Email Address"  />
                    <InputBox col='col-md-6' label={'Phone'} placeholder="Phone"   />
                      </div>
                    </div>}
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="checkout-mess" cols="30" rows="10"
                          placeholder="Notes about your order, e.g. special notes design ."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
						<th className="product-name">Poducts</th>
						<th className="product-name">Ref</th>

                          <th className="product-name">Sizes</th>
                          <th className="product-total">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index} className="cart_item">
							 <td className="product-name">
								<img src={item.photo1}style={{width:100,height:100}} />
                            </td> 
							<td className="product-name">
                              {item.Freq} <strong className="product-quantity">  </strong>
                            </td>
                            <td className="product-name">
                            { item.sizes.map((T,index)=> <span key={index} className="badge bg-secondary mx-1"> {T} </span>) }
                            </td>
							
                            <td className="product-total">
                              <span className="amount">{item.quantity}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Total Products : <strong> <span>{cartItems.length}</span> </strong></th>
                        </tr>
                       
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    
                    <div className="order-button-payment mt-20">
                      <button  onClick={()=> handelSubmit() }  className="os-btn os-btn-black"> <i className="fa fa-share-square-o" aria-hidden="true"></i> Receive  A Quotation </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutArea;



const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];