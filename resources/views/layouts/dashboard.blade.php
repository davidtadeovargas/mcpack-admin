<!DOCTYPE html>
<html dir="" lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/assets/images/icons/favicon.png')}}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Custom CSS -->
    <link href="{{asset('assets/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css')}}" rel="stylesheet">
    <link href="{{asset('assets/assets/libs/fullcalendar/dist/fullcalendar.min.css')}}" rel="stylesheet" />
    <link href="{{asset('assets/assets/extra-libs/calendar/calendar.css')}}" rel="stylesheet" />
    <link href="{{asset('assets/dist/css/style.min.css')}}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>

    <style type="text/css">
        ul.pagination 
        {
            padding-left: 0;
            margin-left: -5px;
            list-style: none;
        }

        ul.pagination > li 
        {
            display: inline-block;
            padding: 10px;
            background-color: #fff;
            border: solid 1px #ccc;
        }

        ul.pagination > li.active 
        {
            background-color: lightblue;
        }




        .tableFixHead { 
            overflow-y: auto; height: 350px; 
        }

        .tableFixHead thead th {
            position: sticky;
            z-index: 1000;
            top: 0; 
        }
        th {
            background: #1f262d;
            color: #fff;
        }

        td {
          font-size: 11px;
        }


        .modal-lg {
            margin: 0;
            max-width: 100% !important;
        }

        .modal-sm {
            max-width: 70% !important;
        }


    </style>
</head>

<body>

    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>

    <div id="main-wrapper">

        <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>

                    <a class="navbar-brand" href="{{route('home')}}">
                        <!-- Logo icon -->
                        <b class="logo-icon p-l-10">
                            <img src="{{asset('assets/assets/images/icons/logo-icon.png')}}" alt="homepage" class="light-logo" style="width: 25px;" />
                        </b>
                        <span class="logo-text">
                             <img src="{{asset('assets/assets/images/icons/logo-text.png')}}" alt="homepage" class="light-logo" />
                        </span>
                    </a>

                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>

                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">

                    <ul class="navbar-nav float-left mr-auto">
                        <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <span class="d-none d-md-block">Create New <i class="fa fa-angle-down"></i></span>
                             <span class="d-block d-md-none"><i class="fa fa-plus"></i></span>   
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search"></i></a>
                            <form class="app-search position-absolute">
                                <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
                            </form>
                        </li>
                    </ul>

                    <ul class="navbar-nav float-right">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell font-24"></i>
                            </a>
                             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="font-24 mdi mdi-comment-processing"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="">
                                             <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-success btn-circle"><i class="ti-calendar"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Event today</h5> 
                                                        <span class="mail-desc">Just a reminder that event</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-info btn-circle"><i class="ti-settings"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Settings</h5> 
                                                        <span class="mail-desc">You can customize this template</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-primary btn-circle"><i class="ti-user"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Pavan kumar</h5> 
                                                        <span class="mail-desc">Just see the my admin!</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-danger btn-circle"><i class="fa fa-link"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Luanch Admin</h5> 
                                                        <span class="mail-desc">Just see the my new admin!</span> 
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="{{asset('assets/assets/images/users/1.jpg')}}" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                <div class="dropdown-divider"></div>
                                <div class="p-l-30 p-10"><a href="javascript:void(0)" class="btn btn-sm btn-success btn-rounded">View Profile</a></div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </header>

        <aside class="left-sidebar" data-sidebarbg="skin5">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="p-t-30">

                        <li class="sidebar-item">
                            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('home')}}" aria-expanded="false">
                                <i class="mdi mdi-view-dashboard"></i>
                                <span class="hide-menu">INICIO</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false">
                                <i class="mdi mdi-receipt"></i>
                                <span class="hide-menu">ALTAS</span>
                            </a>
                            <ul aria-expanded="false" class="collapse  first-level">

                                <li class="sidebar-item">
                                  <a href="#" class="sidebar-link" data-toggle="modal" data-target="#ModalProductos" onclick="">
                                    <i class="mdi mdi-note-plus"></i>
                                    <span class="hide-menu">Productos</span>
                                  </a>
                                </li>

                                <li class="sidebar-item">
                                  <a href="#" class="sidebar-link" data-toggle="modal" data-target="#ModalUsuarios" onclick="">
                                    <i class="mdi mdi-note-plus"></i>
                                    <span class="hide-menu">Usuarios</span>
                                  </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
                    
        <div class="page-wrapper">

            @yield('content')

            <!-- Modals -->            

            <div class="modal fade" id="ModalProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                     <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Información de Productos</h5>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                         <div class="modal-body">
                             <h4>Formulario de productos</h4>
                        </div>
                    </div>
                 </div>
            </div>

            <footer class="footer text-center">
                All Rights Reserved by mcPack - Develop.
            </footer>

        </div>  

    </div>

    <script src="{{asset('assets/js/app.js')}}"></script>
    <script src="{{asset('assets/assets/libs/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{asset('assets/dist/js/jquery.ui.touch-punch-improved.js')}}"></script>
    <script src="{{asset('assets/dist/js/jquery-ui.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('assets/assets/libs/popper.js/dist/umd/popper.min.js')}}"></script>
    <script src="{{asset('assets/assets/libs/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset('assets/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js')}}"></script>
    <script src="{{asset('assets/assets/extra-libs/sparkline/sparkline.js')}}"></script>
    <!--Wave Effects -->
    <script src="{{asset('assets/dist/js/waves.js')}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset('assets/dist/js/sidebarmenu.js')}}"></script>
    <!--Custom JavaScript -->
    <script src="{{asset('assets/dist/js/custom.min.js')}}"></script>
    <!-- this page js -->
    <script src="{{asset('assets/assets/libs/moment/min/moment.min.js')}}"></script>
    <script src="{{asset('assets/assets/libs/fullcalendar/dist/fullcalendar.min.js')}}"></script>
    <script src="{{asset('assets/dist/js/pages/calendar/cal-init.js')}}"></script>
    <!-- this page js -->
    <script src="{{asset('assets/assets/extra-libs/multicheck/datatable-checkbox-init.js')}}"></script>
    <script src="{{asset('assets/assets/extra-libs/multicheck/jquery.multicheck.js')}}"></script>
    <script src="{{asset('assets/assets/extra-libs/DataTables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/assets/libs/inputmask/dist/min/jquery.inputmask.bundle.min.js')}}"></script>
    <script src="{{asset('assets/dist/js/pages/mask/mask.init.js')}}"></script>

    <script src="{{asset('assets/js/empresas.js')}}"></script>
    <script src="{{asset('assets/js/areas.js')}}"></script>
    <script src="{{asset('assets/js/actividades.js')}}"></script>
    <script src="{{asset('assets/js/cuentaFiscal.js')}}"></script>
    <script src="{{asset('assets/js/cuentas.js')}}"></script>
    <script src="{{asset('assets/js/subcuentas.js')}}"></script>
    <script src="{{asset('assets/js/destinos.js')}}"></script>
    <script src="{{asset('assets/js/solicitudes.js')}}"></script>
    <script src="{{asset('assets/js/categorias.js')}}"></script>
    <script src="{{asset('assets/js/tipoproductos.js')}}"></script>
    <script src="{{asset('assets/js/marcas.js')}}"></script>

    <script>
        $('#zero_config').DataTable();
    </script>


    <script>
        $( document ).ready(function() 
        {
           $(".update").click(function(e) {
                e.preventDefault();
                var id = $(this).data('id');
                var href = $(this).data('href');
                var quantity = $("#product_" + id).val();
                //console.log(href+"/"+quantity);
                window.location.href = href+"/"+quantity;
            });
        });

        $('.input-number').on('input', function () { 
            this.value = this.value.replace(/[^0-9]/g,'');///[^a-z]/g solo letras ecepto la ñ
            //if(this.value.length > 3){}
        });
    </script>

</body>

</html>