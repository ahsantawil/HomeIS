const Player = require('./model');

module.exports = {
     index: async(req, res) => {
         try {
             const alertMessage = req.flash("alertMessage");
             const alertStatus = req.flash("alertStatus");

             const alert = { message: alertMessage, status: alertStatus }
             const player = await Player.find();

             res.render('admin/player/view_player', {
                 player,
                 alert,
                 name: req.session.user.name,
                 title: 'Halaman player'
             })
         } catch (err) {
             req.flash('alertMessage', `${err.message}`);
             req.flash('alertStatus', 'danger');
             res.redirect('/player');
         }
     },

     viewCreate : async(req, res) => {
         try {
             res.render('admin/player/create', {
                name: req.session.user.name,
                title: 'add player'
             })
         } catch (err) {
             req.flash('alertMessage', `${err.message}`);
             req.flash('alertStatus', 'danger');
             res.redirect('/player');
         }
     },

    //  actionCreate : async (req, res)=> {
    //      try {
    //          const { email, name, password, role, phoneNumber } = req.body;

    //          const user = await Users.find();

    //          if ( !user.email === user.email ) {
    //             req.flash('alertMessage', 'Email sudah ada, silahkan masukan email yang lain');
    //             req.flash('alertStatus', 'warning');
    //             res.redirect('/users');    
    //          } else {
    //              let users = await Users({ email, name, password, role, phoneNumber })
    //              await users.save();

    //              req.flash('alertMessage', 'Berhasil tambah users');
    //              req.flash('alertStatus', 'success');
    //              res.redirect('/users');
    //          }

    //      } catch (err) {
    //          req.flash('alertMessage', `${err.message}`);
    //          req.flash('alertStatus', 'danger');
    //          res.redirect('/users');
    //      }
    //  },

    //  viewEdit : async (req, res) => {
    //      try {
    //          const { id } = req.params;
             
    //          const users = await Users.findOne( {_id : id });
    //          res.render('admin/users/edit', {
    //              users,
    //              name: req.session.user.name,
    //              title: 'edit users'
    //          })
    //      } catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //          req.flash('alertStatus', 'danger');
    //          res.redirect('/users');
    //      }
    //  },

    //  actionEdit : async (req, res) => {
    //      try {
    //          const { id } = req.params;
    //          const { email, name, password, role, phoneNumber } = req.body;
    //          const user = await Users.find();

    //         if ( !user.email === user.email ) {
    //             req.flash('alertMessage', 'Email sudah ada, silahkan masukan email yang lain');
    //             req.flash('alertStatus', 'warning');
    //             res.redirect('/users'); 
    //         } else {
    //            await Users.findOneAndUpdate({ _id : id
    //             }, { email, name, password, role, phoneNumber });
    
    //             req.flash('alertMessage', 'Berhasil Edit users');
    //             req.flash('alertStatus', 'success');
    //             res.redirect('/users');
    //         }

    //      } catch (err) {
    //          req.flash('alertMessage', `${err.message}`);
    //          req.flash('alertStatus', 'danger');
    //          res.redirect('/users');
    //      }
    //  },

    //  actionDelete : async (req, res) => {
    //      try {
    //         const { id } = req.params;
    //         await Users.findOneAndRemove({
    //             _id : id
    //         });

    //         req.flash('alertMessage', 'Berhasil Delete User');
    //         req.flash('alertStatus', 'success');
    //         res.redirect('/users')

    //      } catch (err) {
    //          req.flash('alertMessage', `${err.message}`);
    //          req.flash('alertStatus', 'danger');
    //          res.redirect('/users');
    //      }
    //  },

    //  viewProfile : async (req, res) => {
    //      try {

    //         const users = await Users.find();
    //         res.render('admin/users/view_profile', {
    //             users,
    //             name: req.session.user.name,
    //             title: 'Halaman Profile'
    //         })
    //      } catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
    //         res.redirect('/users');
    //      }
    //  }
}