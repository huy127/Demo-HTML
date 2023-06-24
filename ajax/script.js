$(document).ready(function() {
  // Load initial data and pagination
  loadStudentData();

  // Handle form submission
  $('#studentForm').submit(function(e) {
    e.preventDefault();
    saveStudentData();
  });

  // Handle edit button click
  $(document).on('click', '.editBtn', function() {
    var id = $(this).data('id');
    var name = $(this).closest('tr').find('.studentName').text();
    var major = $(this).closest('tr').find('.studentMajor').text();

    $('#studentId').val(id);
    $('#studentName').val(name);
    $('#studentMajor').val(major);
  });

  // Handle delete button click
  $(document).on('click', '.deleteBtn', function() {
    var id = $(this).data('id');
    deleteStudentData(id);
  });

  // Handle pagination click
  $(document).on('click', '#pagination a', function() {
    var page = $(this).data('page');
    loadStudentData(page);
  });
});

function loadStudentData(page) {
  page = page || 1;
  var perPage = 3; // Số lượng sinh viên hiển thị trên mỗi trang

  // Gửi yêu cầu AJAX để tải dữ liệu sinh viên từ máy chủ
  $.ajax({
    url: 'load_student_data.php',
    method: 'GET',
    data: { page: page, perPage: perPage },
    success: function(response) {
      var data = JSON.parse(response);
      

      // Hiển thị dữ liệu sinh viên trên bảng
      var studentTableBody = $('#studentTableBody');
      studentTableBody.empty();

      if (data.students.length > 0) {
        for (var i = 0; i < data.students.length; i++) {
          var student = data.students[i];
          var row = '<tr>' +
            '<td>' + student.id + '</td>' +
            '<td class="studentName">' + student.name + '</td>' +
            '<td class="studentMajor">' + student.major + '</td>' +
            '<td><button class="editBtn" data-id="' + student.id + '">Sửa</button></td>' +
            '<td><button class="deleteBtn" data-id="' + student.id + '">Xóa</button></td>' +
            '</tr>';
          studentTableBody.append(row);
        }

        // Hiển thị thanh phân trang
        var pagination = generatePagination(data.totalPages, data.currentPage);
        $('#pagination').html(pagination);
      } else {
        studentTableBody.append('<tr><td colspan="5">Không có dữ liệu sinh viên.</td></tr>');
      }
    }
  });
}


function saveStudentData() {
  var id = $('#studentId').val();
  var name = $('#studentName').val();
  var major = $('#studentMajor').val();

  // Gửi yêu cầu AJAX để lưu dữ liệu sinh viên vào cơ sở dữ liệu
  $.ajax({
    url: 'save_student_data.php',
    method: 'POST',
    data: { id: id, name: name, major: major },
    success: function(response) {
      $('#studentForm')[0].reset();
      loadStudentData();
    }
  });
}

function deleteStudentData(id) {
  // Gửi yêu cầu AJAX để xóa dữ liệu sinh viên khỏi cơ sở dữ liệu
  $.ajax({
    url: 'delete_student_data.php',
    method: 'POST',
    data: { id: id },
    success: function(response) {
      loadStudentData();
    }
  });
}

function generatePagination(totalPages, currentPage) {
  var pagination = '';
  for (var i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pagination += '<a class="active" data-page="' + i + '">' + i + '</a>';
    } else {
      pagination += '<a data-page="' + i + '">' + i + '</a>';
    }
  }
  return pagination;
}





        