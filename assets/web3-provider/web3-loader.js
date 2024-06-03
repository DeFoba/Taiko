const MS_LOADER_STYLE = `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);#ms-loader{position:fixed;display:block;width:100%;height:100%;inset:0;background:rgba(8,5,23,.5);z-index:99999;font-family:Inter,sans-serif}.custom_loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;width:calc(100% - 20px);display:inline-flex;padding:24px;flex-direction:column;align-items:flex-start;gap:24px;border-radius:16px;background:#fff;max-width:500px}.custom_loader_line{height:1px;width:100%;background:#e4e4e4}.custom_loader_heading_group{display:flex;align-items:flex-start;gap:16px}.custom_loader .heading_group_title{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.custom_loader .heading_group_icon{display:flex;width:40px;height:40px;padding:3px;flex-direction:column;justify-content:center;align-items:center;gap:8px;border-radius:8px;border:1px solid #e4e4e4}.custom_loader .heading_group_title_top{color:#01091b;font-size:24px;font-style:normal;font-weight:500}.custom_loader .custom_loader_heading{display:flex;justify-content:space-between;align-items:flex-start;align-self:stretch}.custom_loader .heading_group_title_bottom{color:#3a455f;font-size:16px;font-weight:400}.custom_loader_content{display:flex;width:100%;align-items:flex-start;align-content:flex-start;flex-wrap:wrap}.custom_loader_el{display:flex;padding:20px;flex-direction:column;align-items:flex-start;gap:24px;width:100%;max-width:50%;box-sizing:border-box;cursor:pointer}.custom_loader_el_heading{display:flex;flex-direction:column;align-items:flex-start;gap:2px}.custom_loader_el_top{color:#01091b;font-size:18px;font-weight:500}.custom_loader_el_bottom{color:#3a455f;font-family:Inter;font-size:16px;font-weight:400}.custom_loader_el_button{display:flex;justify-content:space-between;align-items:center;align-self:stretch}.custom_loader_el_logo{display:flex;width:24px;height:24px;justify-content:center;align-items:center}.custom_loader_el_button input{display:flex;width:20px;height:20px;padding:5px;align-items:flex-start;accent-color:#b073ec}.custom_loader button.startconnect{display:flex;padding:12px 20px;justify-content:center;align-items:center;gap:8px;border-radius:12px;background:#9747ff;color:#fff;outline:0;border:0;color:#fff;font-family:Inter;font-size:16px;font-style:normal;font-weight:500;cursor:pointer}.custom_loader_content_bottom{display:flex;justify-content:space-between;align-items:center;align-self:stretch}span.loader_version{color:#3a455f;font-size:16px;font-weight:400}.custom_loader button.cancelconnect{display:flex;padding:12px 20px;justify-content:center;align-items:center;gap:8px;border-radius:12px;border:1px solid #e4e4e4;background:no-repeat;outline:0;color:#01091b;font-family:Inter;font-size:16px;font-weight:500}.custom_loader_buttons{display:flex;justify-content:flex-end;align-items:center;gap:8px}.custom_loader.black{background:#0c0b0f}.custom_loader.black .heading_group_title_top{color:#f0eff6}.custom_loader.black .heading_group_title_bottom{color:#aaa4bd}.custom_loader.black .custom_loader_el_top{color:#f0eff6}.custom_loader.black .custom_loader_el_bottom{color:#7e7795}.custom_loader.black .heading_group_icon{border:1px solid #26212d}.custom_loader.black span.loader_version{color:#aaa4bd}.custom_loader.black button.cancelconnect{color:#fff;border:1px solid #444050}.custom_loader.black .custom_loader_line{background:#26212d}@media (min-width:300px) and (max-width:768px){.custom_loader_el_top{font-size:14px}.custom_loader_el_bottom{font-size:12px}.heading_group_title_top{font-size:16px}.heading_group_title_bottom{font-size:12px}.custom_loader{gap:10px;padding:15px}.loader_version{display:none}.custom_loader_el{gap:10px;padding:12px}.custom_loader button.startconnect{font-size:12px;width:100%}.custom_loader_buttons{width:100%}}.lds-ring{display:inline-block;position:relative;width:40px;border-radius:50px;height:40px;overflow:hidden}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:32px;height:32px;margin:4px;border:3px solid #fff;border-radius:100%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#6000fd transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.l-d-s p{margin:0}button.cancelconnect {cursor: pointer;}`;

const MS_LOADER_LOAD = ` <div class="custom_loader $COLOR$">
<div class="custom_loader_heading">
  <div class="custom_loader_heading_group">
    <div class="heading_group_icon">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <div class="heading_group_title">
      <div class="heading_group_title_top">$TITLE$</div>
      <div class="heading_group_title_bottom">$TEXT$</div>
    </div>
  </div>
</div>     
<div class="custom_loader_line"></div>
<div class="custom_loader_content_bottom">
  <div class="custom_loader_buttons" style="$SHOW_BUTTON$">
     <button class="cancelconnect" onclick="MSL.action()">$BUTTON$</button>
  </div>
</div>

</div>`;

const MS_LOADER_SUCCESS = ` <div class="custom_loader $COLOR$">
<div class="custom_loader_heading">
  <div class="custom_loader_heading_group">
    <div class="heading_group_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
    <path d="M6.99996 0.100098C8.69736 0.100098 10.3252 0.774386 11.5255 1.97463C12.7257 3.17487 13.4 4.80275 13.4 6.50014C13.4 8.19754 12.7257 9.82542 11.5255 11.0257C10.3252 12.2259 8.69736 12.9002 6.99996 12.9002C5.30256 12.9002 3.67469 12.2259 2.47444 11.0257C1.2742 9.82542 0.599915 8.19754 0.599915 6.50014C0.599915 4.80275 1.2742 3.17487 2.47444 1.97463C3.67469 0.774386 5.30256 0.100098 6.99996 0.100098ZM6.2027 7.76278L4.78097 6.34014C4.73 6.28917 4.6695 6.24874 4.6029 6.22116C4.53631 6.19358 4.46494 6.17938 4.39286 6.17938C4.32078 6.17938 4.2494 6.19358 4.18281 6.22116C4.11622 6.24874 4.05571 6.28917 4.00474 6.34014C3.9018 6.44308 3.84398 6.58269 3.84398 6.72826C3.84398 6.87383 3.9018 7.01344 4.00474 7.11638L5.81504 8.92668C5.86586 8.9779 5.92632 9.01856 5.99294 9.0463C6.05955 9.07404 6.131 9.08833 6.20315 9.08833C6.27531 9.08833 6.34676 9.07404 6.41337 9.0463C6.47999 9.01856 6.54045 8.9779 6.59127 8.92668L10.3399 5.17716C10.3915 5.12641 10.4326 5.06593 10.4608 4.99921C10.4889 4.93249 10.5036 4.86086 10.5039 4.78845C10.5043 4.71603 10.4903 4.64427 10.4627 4.57729C10.4352 4.51032 10.3947 4.44946 10.3435 4.39822C10.2923 4.34699 10.2315 4.30639 10.1646 4.27878C10.0976 4.25116 10.0259 4.23707 9.95346 4.23732C9.88104 4.23758 9.8094 4.25216 9.74265 4.28024C9.6759 4.30832 9.61537 4.34934 9.56455 4.40093L6.2027 7.76278Z" fill="#6000FD"/>
    </svg>
    </div>
    <div class="heading_group_title">
      <div class="heading_group_title_top">$TITLE$</div>
      <div class="heading_group_title_bottom">$TEXT$</div>
    </div>
  </div>
</div>     
<div class="custom_loader_line"></div>
<div class="custom_loader_content_bottom">
  <div class="custom_loader_buttons" style="$SHOW_BUTTON$">
     <button class="cancelconnect" onclick="MSL.action()">$BUTTON$</button>
  </div>
</div>

</div>`;

const MS_LOADER_ERROR = ` <div class="custom_loader $COLOR$">
<div class="custom_loader_heading">
  <div class="custom_loader_heading_group">
    <div class="heading_group_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
    <path d="M7.00004 9.7001C7.18137 9.7001 7.33348 9.63866 7.45636 9.51578C7.57924 9.3929 7.64046 9.241 7.64004 9.0601C7.64004 8.87876 7.5786 8.72666 7.45572 8.60378C7.33284 8.4809 7.18094 8.41967 7.00004 8.4201C6.8187 8.4201 6.6666 8.48154 6.54372 8.60442C6.42084 8.7273 6.35961 8.87919 6.36004 9.0601C6.36004 9.24143 6.42148 9.39354 6.54436 9.51642C6.66724 9.6393 6.81913 9.70052 7.00004 9.7001ZM6.36004 7.1401H7.64004V3.3001H6.36004V7.1401ZM7.00004 12.9001C6.1147 12.9001 5.2827 12.732 4.50404 12.3958C3.72537 12.0596 3.04804 11.6037 2.47204 11.0281C1.89604 10.4521 1.44014 9.77476 1.10436 8.9961C0.76857 8.21743 0.600463 7.38543 0.600037 6.5001C0.600037 5.61476 0.768143 4.78276 1.10436 4.0041C1.44057 3.22543 1.89646 2.5481 2.47204 1.9721C3.04804 1.3961 3.72537 0.940204 4.50404 0.604418C5.2827 0.268631 6.1147 0.100524 7.00004 0.100098C7.88537 0.100098 8.71737 0.268204 9.49604 0.604418C10.2747 0.940631 10.952 1.39652 11.528 1.9721C12.104 2.5481 12.5601 3.22543 12.8964 4.0041C13.2326 4.78276 13.4005 5.61476 13.4 6.5001C13.4 7.38543 13.2319 8.21743 12.8957 8.9961C12.5595 9.77476 12.1036 10.4521 11.528 11.0281C10.952 11.6041 10.2747 12.0602 9.49604 12.3964C8.71737 12.7326 7.88537 12.9005 7.00004 12.9001Z" fill="#E0525E"/>
    </svg>    </div>
    <div class="heading_group_title">
      <div class="heading_group_title_top">$TITLE$</div>
      <div class="heading_group_title_bottom">$TEXT$</div>
    </div>
  </div>
</div>     
<div class="custom_loader_line"></div>
<div class="custom_loader_content_bottom">
  <div class="custom_loader_buttons" style="$SHOW_BUTTON$">
     <button class="cancelconnect" onclick="MSL.action()">$BUTTON$</button>
  </div>
</div>

</div>`;

const MS_LOADER_INFO = ` <div class="custom_loader $COLOR$">
<div class="custom_loader_heading">
  <div class="custom_loader_heading_group">
    <div class="heading_group_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M12 18.5C12.34 18.5 12.6252 18.3848 12.8556 18.1544C13.086 17.924 13.2008 17.6392 13.2 17.3C13.2 16.96 13.0848 16.6748 12.8544 16.4444C12.624 16.214 12.3392 16.0992 12 16.1C11.66 16.1 11.3748 16.2152 11.1444 16.4456C10.914 16.676 10.7992 16.9608 10.8 17.3C10.8 17.64 10.9152 17.9252 11.1456 18.1556C11.376 18.386 11.6608 18.5008 12 18.5ZM10.8 13.7H13.2V6.5H10.8V13.7ZM12 24.5C10.34 24.5 8.78 24.1848 7.32 23.5544C5.86 22.924 4.59 22.0692 3.51 20.99C2.43 19.91 1.5752 18.64 0.9456 17.18C0.316 15.72 0.0008 14.16 0 12.5C0 10.84 0.3152 9.28 0.9456 7.82C1.576 6.36 2.4308 5.09 3.51 4.01C4.59 2.93 5.86 2.0752 7.32 1.4456C8.78 0.816 10.34 0.5008 12 0.5C13.66 0.5 15.22 0.8152 16.68 1.4456C18.14 2.076 19.41 2.9308 20.49 4.01C21.57 5.09 22.4252 6.36 23.0556 7.82C23.686 9.28 24.0008 10.84 24 12.5C24 14.16 23.6848 15.72 23.0544 17.18C22.424 18.64 21.5692 19.91 20.49 20.99C19.41 22.07 18.14 22.9252 16.68 23.5556C15.22 24.186 13.66 24.5008 12 24.5Z" fill="#E0525E"/>
    </svg>    </div>
    <div class="heading_group_title">
      <div class="heading_group_title_top">$TITLE$</div>
      <div class="heading_group_title_bottom">$TEXT$</div>
    </div>
  </div>
</div>     
<div class="custom_loader_line"></div>
<div class="custom_loader_content_bottom">
  <div class="custom_loader_buttons" style="$SHOW_BUTTON$">
     <button class="cancelconnect" onclick="MSL.action()">$BUTTON$</button>
  </div>
</div>

</div>`;

const MSL = {
  color_scheme: 'light',
  progress_timer: null,
  func: null,
  is_active: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_LOADER_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-loader').remove();
    } catch(err) {
      console.log('Loader Closed');
    }
    try { clearInterval(MSL.progress_timer) } catch(err) {}
    MSL.is_active = false;
  },
  fire: async (st) => {
    try {
      MSL.close();

      let current_color = ((st.hasOwnProperty('color') ? st.color : MSL.color_scheme) == 'dark') ? 'black' : 'white';
      let mode = (st.hasOwnProperty('icon') ? st.icon : 'info'); let timer = (st.hasOwnProperty('timer') ? st.timer : 0);
      let show_button = (st.hasOwnProperty('showConfirmButton') ? st.showConfirmButton : true);
      let button_func = (st.hasOwnProperty('func') ? st.func : MSL.close); let loader_content = '';

      MSL.is_active = true;
      MSL.func = button_func;

      if (mode == 'load') {
        loader_content = MS_LOADER_LOAD.replaceAll('$TITLE$', st.title || 'Loading...').replaceAll('$TEXT$', st.text || 'Please, wait until process will be done')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
      } else if (mode == 'success') {
        loader_content = MS_LOADER_SUCCESS.replaceAll('$TITLE$', st.title || 'Success').replaceAll('$TEXT$', st.text || 'You\'ve done everything!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'All done!');
      } else if (mode == 'error') {
        loader_content = MS_LOADER_ERROR.replaceAll('$TITLE$', st.title || 'Oops...').replaceAll('$TEXT$', st.text || 'Try again please!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Something went wrong...');
      } else {
        loader_content = MS_LOADER_INFO.replaceAll('$TITLE$', st.title || 'Title').replaceAll('$TEXT$', st.text || 'Text')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Subtitle');
      }

      const loader_elem = document.createElement('div');
      loader_elem.id = 'ms-loader';
      loader_elem.innerHTML = loader_content;
      document.body.prepend(loader_elem);

      if (timer > 0) {
        let countdown = timer;
        MSL.progress_timer = setInterval(() => {
          countdown -= 10;
          if (countdown <= 10) {
            MSL.close();
          } else {
            let percent = (countdown / timer) * 100;
            try {
              document.querySelector('#ms-progress').style.width = `${percent}%`;
            } catch(err) {
              console.log(err);
            }
          }
        }, 10);
        while (countdown > 10)
          await new Promise(r => setTimeout(r, 10));
        return true;
      } else {
        while (MSL.is_active)
          await new Promise(r => setTimeout(r, 10));
        return true;
      }

    } catch(err) {
      console.log('Loader Fired');
    }
  },
  action: () => {
    try {
      MSL.func();
    } catch(err) {
      console.log(err);
    }
  }
};