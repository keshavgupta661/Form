const countryStateInfo = {
	India: {
		Punjab: {
			Rajpura:[],
			Ludhiana:[],
      Jalandhar:[],
      Amritsar:[],
		},
		Gujarat: {
		  Ahmedabad:[],
			Surat:[],
      Vadodara:[],
			Rajkot:[],
		},
    UttarPradesh: {
			Etah:[],
			Lucknow:[],
			Prayagraj:[],
			Agra:[],
		},
		Rajasthan: {
			Jaipur:[],
			Jodhpur:[],
			Udaipur:[],
			Bikaner:[],
		},
	},
	Germany: {
		Bavaria: {
			Munich:[],
			Nuremberg:[],
      Bamberg:[],
			Regensburg:[],
		},
		Hessen: {
			Frankfurt:[],
			Wiesbaden:[],
      Kassel:[],
			Hanau:[],
		},
    Thuringia: {
			Eisenach:[],
			Erfurt:[],
			Jena:[],
			Weimar:[],
		},
		Saxony: {
			Dresden:[],
			Leipzig:[],
			Bautzen:[],
			Chemnitz:[],
		},
	},
  UnitedKingdom: {
		England:{
			London:[],
			Liverpool:[],
			Bristol:[],
			Nottingham:[],
		},
		Scotland: {
			Edinburgh:[],
			Glasgow:[],
			Inverness:[],
			Stirling:[],
		},
    Wales: {
			Cardiff:[],
			Swansea:[],
			Newport:[],
			Bangor:[],
		},
		NorthernIreland: {
			Belfast:[],
			Londonderry:[],
			Lisburn:[],
			Armagh:[],
		},
  },
};

window.onload = function() {
	
	const countrySelection = document.getElementById("Country"),
	stateSelection = document.getElementById("State"),
	citySelection = document.getElementById("City");
	stateSelection.disabled = true;
	citySelection.disabled = true;

	for(let country in countryStateInfo) {
		countrySelection.options[countrySelection.options.length]= new Option(
			country,
			country
			);
	}

	countrySelection.onchange = (e) => {
		stateSelection.disabled = false;

		stateSelection.length = 1; 
		citySelection.length = 1;  
  
	
		for (let state in countryStateInfo[e.target.value]) {
		  stateSelection.options[stateSelection.options.length] = new Option(
			state,
			state
		  );
		}
	};

	stateSelection.onchange = (e) => {
		citySelection.disabled = false;
	
		citySelection.length = 1;  

		for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
		  citySelection.options[citySelection.options.length] = new Option(
			city,
			city
		  );
		}
	};
  stateSelection.onchange = (e) => {
    citySelection.disabled = false;
    citySelection.length = 1; // remove all options bar first
    
    for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
      );
    }
  };
};



