# Pertemuan 2

Great !!!.
Kalian sudah faham dengan basic common git. jika belum faham silahkan baca kembali materi sebelumnya [disini](https://github.com/WAMIKA-Dev/kelas-git/tree/main/1-getting-started).

Kali ini kita akan membahas :
 - `git reset`
 - `git branch`
 - `git merge`
 - mengatasi konflik
 - Praktik

 # Materi

 ## git reset
 
 `git reset` digunakan untuk mereset atau kembali ke perubahan sebelumnya.
 
 **Mode**

 - `--soft`: mode ini kita gunakan untuk kembali branch tertentu tanpa working tree saat ini. mode ini hanya mereset head atau posisi anda saat ini.
 - `--mixed`: mode ini akan mereset *index* atau *staging area*, tetapi tidak merubah *working tree*
 - `--hard`: mode ini akan merest *index* atau *staging area* dan *working tree*.

**Penggunaan**

```bash
git reset <mode> <commit_id>

#untuk melihat dokumentasi
git reset --help
```

 ## git branch

 `git branch` digunakan untuk membuat *branch* atau cabang. ini berguna ketika kita ingin membagi kerjaan kita menjadi bagian-bagian kecil sehingga mudah untuk dikembangkan dan di kerjakan bersama-sama dalam ***Tim***.

 contoh: <br>
 >Sebagai ketua tim anda membagi pengerjaan proyek untuk dikerjakan oleh 2 orang. Sabri anda tugaskan untuk membuat *Home Page* dan Sabrina anda tugaskan untuk membuat *Contact Page*.<br>
 Sabri dan Sabrina akan bersama-sama mengerjakan proyek yang anda tugaskan, Sabri bekerja di branch `page/home` dan sabrina di `page/contact` sehingga Sabri dan Sabrina fokus untuk mengerjakan tugas mereka masing-masing.

**Penggunaan**

```bash
#membuat branch baru
git branch <branch_name>

#berpindah ke branch
git checkout <branch_name>

#membuat branch baru dan langsung pindah ke branch itu
git checkout -b <branch_name>

#untuk melihat dokumentasi branch
git branch --help
```

## git merge

`git merge` digunakan untuk menggabungkan branch tempat anda berada saat ini dengan branch yang anda inginkan buat digabung. 

Contoh:
> Sabri dan Sabrina sudah menyelesaikan tugas yang anda berikan, sekarang tugas anda sebagai ketua tim adalah untuk menggabungkan kedua perkerjaan dari Sabri dan Sabrina sehingga menjadi aplikasi yang utuh sesuai dengan yang dibutuhkan


**Opsi saat melakukan merge**

- `--no-ff`, untuk merge dengan ***no fast-forward***. saat merge, secara default akan dimerge dengan opsi ***ff(fast-fosward)***. saat menggunakan opsi ini, maka anda akan diminta untuk membuat pesan atau commit baru

- `--squash`, untuk merge dengan satu commit. commit-commit yang ada di *target branch* akan dibuat menjadi satu commit. pesan commit-nya anda buat tentukan sendiri

**Penggunaan**

```bash
#untuk melakukan merging
git merge [option] <branch_name>

#untuk melihat dokumentasi
git merge --help
```

# Latihan

> Latihannya nanti bareng-bareng waktu di google meet yak 

Task:
Gunakan file latihan pertemuan sebelumnya (putar kotak)