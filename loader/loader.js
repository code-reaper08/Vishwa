var textarea = $('.term');
var speed = 500; //Writing speed in milliseconds
var text = 'sh vishwa_website.sh';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {$(".load").fadeOut(1000);}, 500);
      }
    },time);
}

var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
"KERNEL supported cpus:",
"  Intel GenuineIntel",
"  AMD AuthenticAMD",
"  Centaur CentaurHauls",
"e820: BIOS-provided physical RAM map:",
"BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
"BIOS-e820: [mem 0x000000000009e000-0x000000000009ffff] reserved",
"BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
"BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",
"BIOS-e820: [mem 0x0000000020200000-0x0000000040003fff] usable",
"BIOS-e820: [mem 0x0000000040004000-0x0000000040004fff] reserved",
"BIOS-e820: [mem 0x0000000040005000-0x00000000c9746fff] usable",
"BIOS-e820: [mem 0x00000000c9747000-0x00000000c9d47fff] ACPI NVS",
"BIOS-e820: [mem 0x00000000c9d48000-0x00000000c9d4afff] type 20",
"BIOS-e820: [mem 0x00000000c9d4b000-0x00000000c9d60fff] usable",
"BIOS-e820: [mem 0x00000000c9d61000-0x00000000c9d66fff] type 20",
"BIOS-e820: [mem 0x00000000c9d67000-0x00000000c9d68fff] usable",
"BIOS-e820: [mem 0x00000000c9d69000-0x00000000c9d72fff] type 20",
"BIOS-e820: [mem 0x00000000c9d73000-0x00000000c9f06fff] usable",
"BIOS-e820: [mem 0x00000000c9f07000-0x00000000c9f0afff] type 20",
"BIOS-e820: [mem 0x00000000c9f0b000-0x00000000c9f53fff] usable",
"BIOS-e820: [mem 0x00000000c9f54000-0x00000000c9f5afff] type 20",
"BIOS-e820: [mem 0x00000000c9f5b000-0x00000000c9f67fff] reserved",
"BIOS-e820: [mem 0x00000000c9f68000-0x00000000c9f79fff] type 20",
"BIOS-e820: [mem 0x00000000c9f7a000-0x00000000c9f7cfff] usable",
"BIOS-e820: [mem 0x00000000c9f7d000-0x00000000c9f7efff] type 20",
"BIOS-e820: [mem 0x00000000c9f7f000-0x00000000c9f95fff] usable",
"BIOS-e820: [mem 0x00000000c9f96000-0x00000000c9f9bfff] type 20",
"BIOS-e820: [mem 0x00000000c9f9c000-0x00000000c9fa3fff] usable",
"BIOS-e820: [mem 0x00000000c9fa4000-0x00000000c9fa4fff] type 20",
"BIOS-e820: [mem 0x00000000c9fa5000-0x00000000c9fb3fff] usable",
"BIOS-e820: [mem 0x00000000c9fb4000-0x00000000c9fb4fff] type 20",
"BIOS-e820: [mem 0x00000000c9fb5000-0x00000000c9fbffff] usable",
"BIOS-e820: [mem 0x00000000c9fc0000-0x00000000c9fc4fff] type 20",
"BIOS-e820: [mem 0x00000000c9fc5000-0x00000000c9ff0fff] usable",
"BIOS-e820: [mem 0x00000000c9ff1000-0x00000000c9ff1fff] type 20",
"BIOS-e820: [mem 0x00000000c9ff2000-0x00000000ca001fff] usable",
"BIOS-e820: [mem 0x00000000ca002000-0x00000000ca028fff] type 20",
"BIOS-e820: [mem 0x00000000ca029000-0x00000000ca03cfff] usable",
"BIOS-e820: [mem 0x00000000ca03d000-0x00000000ca03dfff] type 20",
"BIOS-e820: [mem 0x00000000ca03e000-0x00000000ca03efff] usable",
"BIOS-e820: [mem 0x00000000ca03f000-0x00000000ca040fff] type 20",
"BIOS-e820: [mem 0x00000000ca041000-0x00000000ca041fff] usable",
"BIOS-e820: [mem 0x00000000ca042000-0x00000000ca046fff] type 20",
"BIOS-e820: [mem 0x00000000ca047000-0x00000000ca05dfff] usable",
"BIOS-e820: [mem 0x00000000ca05e000-0x00000000ca0bdfff] reserved",
"BIOS-e820: [mem 0x00000000ca0be000-0x00000000ca0d7fff] type 20",
"pid_max: default: 32768 minimum: 301",
"ACPI: Core revision 20141107",
"ACPI: All ACPI Tables successfully acquired",
"Security Framework initialized",
"AppArmor: AppArmor initialized",
"Yama: becoming mindful.",
"Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes)",
"Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes)",
"Mount-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Mountpoint-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Initializing cgroup subsys memory",
"Initializing cgroup subsys devices",
"Initializing cgroup subsys freezer",
"Initializing cgroup subsys net_cls",
"Initializing cgroup subsys blkio",
"Initializing cgroup subsys perf_event",
"Initializing cgroup subsys net_prio",
"Initializing cgroup subsys hugetlb",
"CPU: Physical Processor ID: 0",
"CPU: Processor Core ID: 0",
"ENERGY_PERF_BIAS: Set to 'normal', was 'performance'",
"ENERGY_PERF_BIAS: View and update with x86_energy_perf_policy(8)",
"mce: CPU supports 9 MCE banks",
"CPU0: Thermal monitoring enabled (TM1)",
"process: using mwait in idle threads",
"Last level iTLB entries: 4KB 512, 2MB 8, 4MB 8",
"Last level dTLB entries: 4KB 512, 2MB 32, 4MB 32, 1GB 0",
"Freeing SMP alternatives memory: 32K (ffffffff81e96000 - ffffffff81e9e000)",
"Ignoring BGRT: invalid status 0 (expected 1)",
"ftrace: allocating 30086 entries in 118 pages",
"..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1",
"smpboot: CPU0: Intel(R) Core(TM) i7-3630QM CPU @ 2.40GHz (fam: 06, model: 3a, stepping: 09)",
"TSC deadline timer enabled",
"Performance Events: PEBS fmt1+, 16-deep LBR, IvyBridge events, full-width counters, Intel PMU driver.",
"... version:                3",
"... bit width:              48",
"... generic registers:      4",
"... value mask:             0000ffffffffffff",
"... max period:             0000ffffffffffff",
"... fixed-purpose events:   3",
"... event mask:             000000070000000f",
"x86: Booting SMP configuration:",
".... node  #0, CPUs:      #1",
"CPU1 microcode updated early to revision 0x1b, date = 2014-05-29",
"NMI watchdog: enabled on all CPUs, permanently consumes one hw-PMU counter.",
" #2",
"CPU2 microcode updated early to revision 0x1b, date = 2014-05-29",
" #3",
"CPU3 microcode updated early to revision 0x1b, date = 2014-05-29",
" #4 #5 #6 #7",
"x86: Booted up 1 node, 8 CPUs",
"smpboot: Total of 8 processors activated (38312.68 BogoMIPS)",
"devtmpfs: initialized",
"evm: security.selinux",
"evm: security.SMACK64",
"evm: security.SMACK64EXEC",
"evm: security.SMACK64TRANSMUTE",
"evm: security.SMACK64MMAP",
"evm: security.ima",
"evm: security.capability",
"PM: Registering ACPI NVS region [mem 0xc9747000-0xc9d47fff] (6295552 bytes)",
"PM: Registering ACPI NVS region [mem 0xca602000-0xca881fff] (2621440 bytes)",
"PM: Registering ACPI NVS region [mem 0xca888000-0xca8cafff] (274432 bytes)",
"pinctrl core: initialized pinctrl subsystem",
"RTC time:  5:41:44, date: 07/10/15",
"NET: Registered protocol family 16",
"cpuidle: using governor ladder",
"cpuidle: using governor menu",
"ACPI FADT declares the system doesn't support PCIe ASPM, so disable it",
"ACPI: bus type PCI registered",
"acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5",
"PCI: MMCONFIG for domain 0000 [bus 00-3f] at [mem 0xf8000000-0xfbffffff] (base 0xf8000000)",
"PCI: MMCONFIG at [mem 0xf8000000-0xfbffffff] reserved in E820",
"PCI: Using configuration type 1 for base access",
"ACPI: Added _OSI(Module Device)",
"ACPI: Added _OSI(Processor Device)",
"ACPI: Added _OSI(3.0 _SCP Extensions)",
"ACPI: Added _OSI(Processor Aggregator Device)",
"ACPI : EC: EC description table is found, configuring boot EC",
"ACPI: Executed 1 blocks of module-level executable AML code",
"[Firmware Bug]: ACPI: BIOS _OSI(Linux) query ignored",
"ACPI: Dynamic OEM Table Load:",
"ACPI: SSDT 0xFFFF88041C049000 000853 (v01 PmRef  Cpu0Cst  00003001 INTL 20051117)",
"ACPI: Dynamic OEM Table Load:",
"ACPI: SSDT 0xFFFF88041C7D4C00 000303 (v01 PmRef  ApIst    00003000 INTL 20051117)",
"ACPI: Dynamic OEM Table Load:",
"ACPI: SSDT 0xFFFF88041C7DB200 000119 (v01 PmRef  ApCst    00003000 INTL 20051117)",
"ACPI: Interpreter enabled",
"ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [\_S1_] (20141107/hwxface-580)",
"ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [\_S2_] (20141107/hwxface-580)",
"ACPI: (supports S0 S3 S4 S5)",
"ACPI: Using IOAPIC for interrupt routing",
"PCI: Using host bridge windows from ACPI; if necessary, use \"pci=nocrs\" and report a bug",
"ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-3e])",
"acpi PNP0A08:00: _OSC: OS supports [ExtendedConfig ASPM ClockPM Segments MSI]",
"acpi PNP0A08:00: _OSC: platform does not support [PCIeHotplug PME]",
"acpi PNP0A08:00: _OSC: OS now controls [AER PCIeCapability]",
"acpi PNP0A08:00: FADT indicates ASPM is unsupported, using BIOS configuration",
"PCI host bridge to bus 0000:00",
"pci_bus 0000:00: root bus resource [bus 00-3e]",
"pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7]",
"pci 0000:00:14.0: PME# supported from D3hot D3cold",
"pci 0000:00:14.0: System wakeup disabled by ACPI",
"pci 0000:00:16.0: [8086:1e3a] type 00 class 0x078000",
"pci 0000:00:16.0: reg 0x10: [mem 0xf7a1a000-0xf7a1a00f 64bit]",
"pci 0000:00:16.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1a.0: [8086:1e2d] type 00 class 0x0c0320",
"pci 0000:00:1a.0: reg 0x10: [mem 0xf7a18000-0xf7a183ff]",
"pci 0000:00:1a.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1a.0: System wakeup disabled by ACPI",
"pci 0000:00:1b.0: [8086:1e20] type 00 class 0x040300",
"pci 0000:00:1b.0: reg 0x10: [mem 0xf7a10000-0xf7a13fff 64bit]",
"pci 0000:00:1b.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1b.0: System wakeup disabled by ACPI",
"pci 0000:00:1c.0: [8086:1e10] type 01 class 0x060400",
"pci 0000:00:1c.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1c.1: [8086:1e12] type 01 class 0x060400",
"pci 0000:00:1c.1: PME# supported from D0 D3hot D3cold",
"pci 0000:00:01.0:   bridge window [io  0xe000-0xefff]",
"ACPI: PCI Interrupt Link [LNKH] (IRQs 3 4 5 6 7 10 12) *0, disabled.",
"ACPI: Enabled 4 GPEs in block 00 to 3F",
"ACPI : EC: GPE = 0x19, I/O: command/status = 0x66, data = 0x62",
"vgaarb: setting as boot device: PCI:0000:00:02.0",
"vgaarb: device added: PCI:0000:00:02.0,decodes=io+mem,owns=io+mem,locks=none",
"vgaarb: device added: PCI:0000:01:00.0,decodes=io+mem,owns=none,locks=none",
"vgaarb: loaded",
"vgaarb: bridge control possible 0000:01:00.0",
"vgaarb: no bridge control possible 0000:00:02.0",
"SCSI subsystem initialized",
"libata version 3.00 loaded.",
"ACPI: bus type USB registered",
"usbcore: registered new interface driver usbfs",
"usbcore: registered new interface driver hub",
"usbcore: registered new device driver usb",
"PCI: Using ACPI for IRQ routing",
"PCI: pci_cache_line_size set to 64 bytes",
"e820: reserve RAM buffer [mem 0x0009e000-0x0009ffff]",
"e820: reserve RAM buffer [mem 0x40004000-0x43ffffff]",
"e820: reserve RAM buffer [mem 0xc9747000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9d61000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9d69000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f07000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f54000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f7d000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca042000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca05e000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca888000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcacd8000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcb000000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0x42f200000-0x42fffffff]",
"NetLabel: Initializing",
"NetLabel:  domain hash size = 128",
"NetLabel:  protocols = UNLABELED CIPSOv4",
"NetLabel:  unlabeled traffic allowed by default",
"hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0, 0, 0, 0, 0, 0",
"hpet0: 8 comparators, 64-bit 14.318180 MHz counter",
"Switched to clocksource hpet",
"AppArmor: AppArmor Filesystem Enabled",
"pnp: PnP ACPI init",
"system 00:00: [mem 0xfed40000-0xfed44fff] has been reserved",
"system 00:00: Plug and Play ACPI device, IDs PNP0c01 (active)",

"system 00:07: [mem 0xcfe00000-0xcfe00fff] has been reserved",
"system 00:07: Plug and Play ACPI device, IDs PNP0c02 (active)",
"system 00:08: [mem 0xcfe00000-0xcfe00fff] has been reserved",
"system 00:08: Plug and Play ACPI device, IDs PNP0c02 (active)",
"pci_bus 0000:04: resource 1 [mem 0xf7800000-0xf78fffff]",
"NET: Registered protocol family 2",
"TCP established hash table entries: 131072 (order: 8, 1048576 bytes)",
"TCP bind hash table entries: 65536 (order: 8, 1048576 bytes)",
"TCP: Hash tables configured (established 131072 bind 65536)",
"TCP: reno registered",
"UDP hash table entries: 8192 (order: 6, 262144 bytes)",
"UDP-Lite hash table entries: 8192 (order: 6, 262144 bytes)",
"NET: Registered protocol family 1",
"pci 0000:00:02.0: Video device with shadowed ROM",
"pci 0000:04:00.0: set MSI_INTX_DISABLE_BUG flag",
"PCI: CLS 64 bytes, default 64",
"Trying to unpack rootfs image as initramfs...",
"Freeing initrd memory: 20476K (ffff8800357f2000 - ffff880036bf1000)",
"PCI-DMA: Using software bounce buffering for IO (SWIOTLB)",
"software IO TLB [mem 0xc406c000-0xc806c000] (64MB) mapped at [ffff8800c406c000-ffff8800c806bfff]",
"RAPL PMU detected, hw unit 2^-16 Joules, API unit is 2^-32 Joules, 3 fixed counters 163840 ms ovfl timer",
"microcode: CPU0 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU1 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU2 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU3 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU4 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU5 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU6 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: CPU7 sig=0x306a9, pf=0x10, revision=0x1b",
"microcode: Microcode Update Driver: v2.00 <tigran@aivazian.fsnet.co.uk>, Peter Oruba",
"Scanning for low memory corruption every 60 seconds",
"futex hash table entries: 2048 (order: 5, 131072 bytes)",
"Initialise system trusted keyring",
"audit: initializing netlink subsys (disabled)",
"audit: type=2000 audit(1436506904.680:1): initialized",
"HugeTLB registered 2 MB page size, pre-allocated 0 pages",
"zpool: loaded",
"zbud: loaded",
"VFS: Disk quotas dquot_6.5.2",
"VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)",
"fuse init (API version 7.23)",
"Key type big_key registered",
"Key type asymmetric registered",
"Asymmetric key parser 'x509' registered",
"Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)",
"io scheduler noop registered",
"io scheduler deadline registered (default)",
"io scheduler cfq registered",
"pci_hotplug: PCI Hot Plug PCI Core version: 0.5",
"pciehp: PCI Express Hot Plug Controller Driver version: 0.4",
"efifb: probing for efifb",
"efifb: framebuffer at 0xd0000000, mapped to 0xffffc90005c00000, using 8128k, total 8128k",
"efifb: mode is 1920x1080x32, linelength=7680, pages=1",
"efifb: scrolling: redraw",
"efifb: Truecolor: size=8:8:8:8, shift=24:16:8:0",
"Console: switching to colour frame buffer device 240x67",
"fb0: EFI VGA frame buffer device",
"intel_idle: MWAIT substates: 0x21120",
"intel_idle: v0.4 model 0x3A",
"intel_idle: lapic_timer_reliable_states 0xffffffff",
"ACPI: AC Adapter [AC0] (on-line)",
"input: Lid Switch as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0D:00/input/input0",
"ACPI: Lid Switch [LID]",
"input: Sleep Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0E:00/input/input1",
"ACPI: Sleep Button [SLPB]",
"input: Power Button as /devices/LNXSYSTM:00/LNXPWRBN:00/input/input2",
"ACPI: Power Button [PWRF]",
"thermal LNXTHERM:00: registered as thermal_zone0",
"ACPI: Thermal Zone [THRM] (68 C)",
"GHES: HEST is not enabled!",
"Serial: 8250/16550 driver, 32 ports, IRQ sharing enabled",
"Linux agpgart interface v0.103",
"brd: module loaded",
"loop: module loaded",
"libphy: Fixed MDIO Bus: probed",
"tun: Universal TUN/TAP device driver, 1.6",
"tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>",
"PPP generic driver version 2.4.2",
"xhci_hcd 0000:00:14.0: xHCI Host Controller",
"xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 1",
"xhci_hcd 0000:00:14.0: cache line size of 64 is not supported",
"usb usb1: New USB device found, idVendor=1d6b, idProduct=0002",
"usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb1: Product: xHCI Host Controller",
"usb usb1: Manufacturer: Linux 3.19.0-21-generic xhci-hcd",
"usb usb1: SerialNumber: 0000:00:14.0",
"hub 1-0:1.0: USB hub found",
"hub 1-0:1.0: 4 ports detected",
"xhci_hcd 0000:00:14.0: xHCI Host Controller",
"xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 2",
"usb usb2: New USB device found, idVendor=1d6b, idProduct=0003",
"usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb2: Product: xHCI Host Controller",
"usb usb2: Manufacturer: Linux 3.19.0-21-generic xhci-hcd",
"usb usb2: SerialNumber: 0000:00:14.0",
"hub 2-0:1.0: USB hub found",
"hub 2-0:1.0: 4 ports detected",
"ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver",
"ehci-pci: EHCI PCI platform driver",
"ehci-pci 0000:00:1a.0: EHCI Host Controller",
"ehci-pci 0000:00:1a.0: new USB bus registered, assigned bus number 3",
"ehci-pci 0000:00:1a.0: debug port 2",
"ehci-pci 0000:00:1a.0: cache line size of 64 is not supported",
"ehci-pci 0000:00:1a.0: irq 16, io mem 0xf7a18000",
"ehci-pci 0000:00:1a.0: USB 2.0 started, EHCI 1.00",
"usb usb3: New USB device found, idVendor=1d6b, idProduct=0002",
"usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb3: Product: EHCI Host Controller",
"usb usb3: Manufacturer: Linux 3.19.0-21-generic ehci_hcd",
"usb usb3: SerialNumber: 0000:00:1a.0",
"hub 3-0:1.0: USB hub found",
"hub 3-0:1.0: 2 ports detected",
"ehci-pci 0000:00:1d.0: EHCI Host Controller",
"ehci-pci 0000:00:1d.0: new USB bus registered, assigned bus number 4",
"ehci-pci 0000:00:1d.0: debug port 2",
"ehci-pci 0000:00:1d.0: cache line size of 64 is not supported",
"ehci-pci 0000:00:1d.0: irq 23, io mem 0xf7a17000",
"ehci-pci 0000:00:1d.0: USB 2.0 started, EHCI 1.00",
"usb usb4: New USB device found, idVendor=1d6b, idProduct=0002",
"usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb4: Product: EHCI Host Controller",
"usb usb4: Manufacturer: Linux 3.19.0-21-generic ehci_hcd",
"usb usb4: SerialNumber: 0000:00:1d.0",
"hub 4-0:1.0: USB hub found",
"hub 4-0:1.0: 2 ports detected",
"ehci-platform: EHCI generic platform driver",
"ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver",
"ohci-pci: OHCI PCI platform driver",
"ohci-platform: OHCI generic platform driver",
"uhci_hcd: USB Universal Host Controller Interface driver",
"i8042: PNP: PS/2 Controller [PNP030b:PS2K,PNP0f03:PS2M] at 0x60,0x64 irq 1,12",
"i8042: Detected active multiplexing controller, rev 1.1",
"serio: i8042 KBD port at 0x60,0x64 irq 1",
"serio: i8042 AUX0 port at 0x60,0x64 irq 12",
"serio: i8042 AUX1 port at 0x60,0x64 irq 12",
"serio: i8042 AUX2 port at 0x60,0x64 irq 12",
"serio: i8042 AUX3 port at 0x60,0x64 irq 12",
"mousedev: PS/2 mouse device common for all mice",
"rtc_cmos 00:02: RTC can wake from S4",
"rtc_cmos 00:02: rtc core: registered rtc_cmos as rtc0",
"rtc_cmos 00:02: alarms up to one month, y3k, 242 bytes nvram, hpet irqs",
"i2c /dev entries driver",
"device-mapper: uevent: version 1.0.3",
"device-mapper: ioctl: 4.29.0-ioctl (2014-10-28) initialised: dm-devel@redhat.com",
"Intel P-state driver initializing.",
"Consider also installing thermald for improved thermal control.",
"ledtrig-cpu: registered to indicate activity on CPUs",
"EFI Variables Facility v0.08 2004-May-17",
"PCCT header not found.",
"ACPI PCC probe failed.",
"TCP: cubic registered",
"NET: Registered protocol family 10",
"NET: Registered protocol family 17",
"Key type dns_resolver registered",
"Loading compiled-in X.509 certificates",
"Loaded X.509 cert 'Magrathea: Glacier signing key: 333a84cc9705ddb26e1cdce388afcedc2deff761'",
"registered taskstats version 1",
"Key type trusted registered",
"Key type encrypted registered",
"AppArmor: AppArmor sha1 policy hashing enabled",
"ima: No TPM chip found, activating TPM-bypass!",
"evm: HMAC attrs: 0x1",
"  Magic number: 7:417:668",
"rtc_cmos 00:02: setting system clock to 2015-07-10 05:41:45 UTC (1436506905)",
"BIOS EDD facility v0.16 2004-Jun-25, 0 devices found",
"EDD information not available.",
"PM: Hibernation image not present or could not be loaded.",
"input: AT Translated Set 2 keyboard as /devices/platform/i8042/serio0/input/input3",
"ACPI: Battery Slot [BAT0] (battery present)",
"Freeing unused kernel memory: 1408K (ffffffff81d36000 - ffffffff81e96000)",
"Write protecting the kernel read-only data: 12288k",
"Freeing unused kernel memory: 180K (ffff8800017d3000 - ffff880001800000)",
"Freeing unused kernel memory: 344K (ffff880001baa000 - ffff880001c00000)",
"random: systemd-udevd urandom read with 11 bits of entropy available",
"ahci 0000:00:1f.2: version 3.0",
"alx 0000:04:00.0 eth0: Qualcomm Atheros AR816x/AR817x Ethernet [60:a4:4c:71:63:bd]",
"ahci 0000:00:1f.2: AHCI 0001.0300 32 slots 6 ports 6 Gbps 0x5 impl SATA mode",
"ahci 0000:00:1f.2: flags: 64bit ncq pm led clo pio slum part ems apst ",
"scsi host0: ahci",
"input: ETPS/2 Elantech Touchpad as /devices/platform/i8042/serio4/input/input11",
"systemd[1]: systemd 219 running in system mode. (+PAM +AUDIT +SELINUX +IMA +APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT -GNUTLS +ACL +XZ -LZ4 -SECCOMP +BLKID -ELFUTILS +KMOD -IDN)",
"systemd[1]: Detected architecture x86-64.",
"systemd[1]: Set hostname to <beezlebub>.",
"Switched to clocksource tsc",
"systemd[1]: Cannot add dependency job for unit docker.socket, ignoring: Unit docker.socket is masked.",
"systemd[1]: Reached target Encrypted Volumes.",
"systemd[1]: Starting Encrypted Volumes.",
"systemd[1]: Created slice Root Slice.",
"systemd[1]: Starting Root Slice.",
"systemd[1]: Created slice System Slice.",
"systemd[1]: Starting System Slice.",
"systemd[1]: Reached target Remote File Systems (Pre).",
"systemd[1]: Starting Remote File Systems (Pre).",
"systemd[1]: Started Forward Password Requests to Wall Directory Watch.",
"systemd[1]: Starting Forward Password Requests to Wall Directory Watch.",
"systemd[1]: Listening on fsck to fsckd communication Socket.",
"systemd[1]: Starting fsck to fsckd communication Socket.",
"systemd[1]: Listening on Journal Audit Socket.",
"systemd[1]: Starting Journal Audit Socket.",
"systemd[1]: Listening on Journal Socket.",
"systemd[1]: Starting Journal Socket.",
"systemd[1]: Mounting Debug File System...",
"systemd[1]: Started Braille Device Support.",
"systemd[1]: Starting Braille Device Support...",
"systemd[1]: Mounting POSIX Message Queue File System...",
"systemd[1]: Starting Uncomplicated firewall...",
"systemd[1]: Created slice system-systemd\x2dfsck.slice.",
"systemd[1]: Starting system-systemd\x2dfsck.slice.",
"systemd[1]: Starting Nameserver information manager...",
"systemd[1]: Starting Increase datagram queue length...",
"systemd[1]: Listening on udev Control Socket.",
"systemd[1]: Starting udev Control Socket.",
"systemd[1]: Started Read required files in advance.",
"systemd[1]: Starting Read required files in advance...",
"systemd[1]: Listening on Delayed Shutdown Socket.",
"systemd[1]: Starting Delayed Shutdown Socket.",
"systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.",
"systemd[1]: Starting Arbitrary Executable File Formats File System Automount Point.",
"systemd[1]: Started Set Up Additional Binary Formats.",
"systemd[1]: Listening on udev Kernel Socket.",
"systemd[1]: Starting udev Kernel Socket.",
"systemd[1]: Starting Setup Virtual Console...",
"systemd[1]: Listening on /dev/initctl Compatibility Named Pipe.",
"systemd[1]: Starting /dev/initctl Compatibility Named Pipe.",
"systemd[1]: Starting udev Coldplug all Devices...",
"systemd[1]: Starting Create list of required static device nodes for the current kernel...",
"systemd[1]: Created slice system-getty.slice.",
"systemd[1]: Starting system-getty.slice.",
"systemd[1]: Created slice User and Session Slice.",
"systemd[1]: Starting User and Session Slice.",
"systemd[1]: Reached target Slices.",
"systemd[1]: Starting Slices.",
"systemd[1]: Mounting Huge Pages File System...",
"systemd[1]: Listening on Journal Socket (/dev/log).",
"systemd[1]: Starting Journal Socket (/dev/log).",
"systemd[1]: Starting Load Kernel Modules...",
"systemd[1]: Mounted POSIX Message Queue File System.",
"systemd[1]: Mounted Huge Pages File System.",
"systemd[1]: Mounted Debug File System.",
"systemd[1]: Started Uncomplicated firewall.",
"systemd[1]: Started Increase datagram queue length.",
"systemd[1]: Started Setup Virtual Console.",
"systemd[1]: Started Create list of required static device nodes for the current kernel.",
"systemd[1]: Started Nameserver information manager.",
"lp: driver loaded but no devices found",
"systemd[1]: Started udev Coldplug all Devices.",
"ppdev: user-space parallel port driver",
"systemd[1]: Starting udev Wait for Complete Device Initialization...",
"systemd[1]: Starting Create Static Device Nodes in /dev...",
"systemd[1]: Listening on Syslog Socket.",
"systemd[1]: Starting Syslog Socket.",
"systemd[1]: Starting Journal Service...",
"systemd[1]: Started Load Kernel Modules.",
"systemd[1]: Starting Apply Kernel Variables...",
"systemd[1]: Mounted Configuration File System.",
"systemd[1]: Mounting FUSE Control File System...",
"systemd[1]: Mounted FUSE Control File System.",
"systemd[1]: Started Create Static Device Nodes in /dev.",
"systemd[1]: Starting udev Kernel Device Manager...",
"systemd[1]: Started Apply Kernel Variables.",
"systemd[1]: Started Journal Service.",
"random: nonblocking pool is initialized",
"wmi: Mapper loaded",
"shpchp: Standard Hot Plug PCI Controller Driver version: 0.4",
"ACPI Warning: SystemIO range 0x0000000000000428-0x000000000000042f conflicts with OpRegion 0x0000000000000400-0x000000000000044f (\GPIS) (20141107/utaddress-258)",
"Linux video capture interface: v2.00",
"usbcore: registered new interface driver btusb",
"intel_rapl: Found RAPL domain package",
"intel_rapl: Found RAPL domain core",
"intel_rapl: Found RAPL domain uncore",
"[drm] Supports vblank timestamp caching Rev 2 (21.10.2013).",
"[drm] Driver supports precise vblank timestamp query.",
"vgaarb: device changed decodes: PCI:0000:00:02.0,olddecodes=io+mem,decodes=none:owns=io+mem",
"gpio_ich: GPIO from 436 to 511 on gpio_ich",
"cfg80211: World regulatory domain updated:",
"cfg80211:  DFS Master region: unset",
"cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)",
"cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)",
"cfg80211:   (2457000 KHz - 2482000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)",
"cfg80211:   (2474000 KHz - 2494000 KHz @ 20000 KHz), (300 mBi, 2000 mBm), (N/A)",
"cfg80211:   (5170000 KHz - 5250000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)",
"cfg80211:   (5735000 KHz - 5835000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)",
"ieee80211 phy0: Selected rate control algorithm 'iwl-agn-rs'",
"asus_wmi: ASUS WMI generic driver loaded",
"asus_wmi: Initialization: 0x1",
"asus_wmi: BIOS WMI version: 7.9",
"asus_wmi: SFUN value: 0x6a0877",
"input: Asus WMI hotkeys as /devices/platform/asus-nb-wmi/input/input12",
"uvcvideo: Found UVC 1.00 device ASUS USB2.0 Webcam (1bcf:2883)",
"Adding 16760828k swap on /dev/sda5.  Priority:-1 extents:1 across:16760828k SSFS",
"ACPI: Video Device [PEGP] (multi-head: yes  rom: yes  post: no)",
"input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:02/LNXVIDEO:00/input/input13",
"ACPI: Video Device [GFX0] (multi-head: yes  rom: no  post: no)",
"input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/LNXVIDEO:01/input/input14",
"[drm] Initialized i915 1.6.0 20141121 for 0000:00:02.0 on minor 0",
"input: ASUS USB2.0 Webcam as /devices/pci0000:00/0000:00:1a.0/usb3/3-1/3-1.3/3-1.3:1.0/input/input15",
"usbcore: registered new interface driver uvcvideo",
"USB Video Class driver (1.1.1)",
"sound hdaudioC0D0: autoconfig: line_outs=2 (0x14/0x16/0x0/0x0/0x0) type:speaker",
"sound hdaudioC0D0:    speaker_outs=0 (0x0/0x0/0x0/0x0/0x0)",
"sound hdaudioC0D0:    hp_outs=1 (0x21/0x0/0x0/0x0/0x0)",
"sound hdaudioC0D0:    mono: mono_out=0x0",
"sound hdaudioC0D0:    dig-out=0x1e/0x0",
"sound hdaudioC0D0:    inputs:",
"sound hdaudioC0D0:      Internal Mic=0x19",
"sound hdaudioC0D0:      Mic=0x18",
"fbcon: inteldrmfb (fb0) is primary device",
"Console: switching to colour frame buffer device 240x67",
"i915 0000:00:02.0: fb0: inteldrmfb frame buffer device",
"i915 0000:00:02.0: registered panic notifier",
"input: HDA Intel PCH Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input16",
"input: HDA Intel PCH Headphone as /devices/pci0000:00/0000:00:1b.0/sound/card0/input17",
"asus_wmi: Backlight controlled by ACPI video driver",
"EXT4-fs (sda4): re-mounted. Opts: errors=remount-ro",
"systemd-journald[346]: Received request to flush runtime journal from PID 1",
"EXT4-fs (sda2): mounted filesystem with ordered data mode. Opts: (null)",
"EXT4-fs (sda7): mounted filesystem with ordered data mode. Opts: (null)",
"audit: type=1400 audit(1436478108.432:2): apparmor=\"STATUS\" operation=\"profile_load\" profile=\"unconfined\" name=\"/usr/lib/lightdm/lightdm-guest-session\" pid=728 comm=\"apparmor_parser\"",
"bbswitch: version 0.7",
"bbswitch: Found integrated VGA device 0000:00:02.0: \_SB_.PCI0.GFX0",
"bbswitch: Found discrete VGA device 0000:01:00.0: \_SB_.PCI0.PEG0.PEGP",
"ACPI Warning: \_SB_.PCI0.PEG0.PEGP._DSM: Argument #4 type mismatch - Found [Buffer], ACPI requires [Package] (20141107/nsarguments-95)",
"bbswitch: detected an Optimus _DSM function",
"pci 0000:01:00.0: enabling device (0000 -> 0003)",
"bbswitch: Succesfully loaded. Discrete card 0000:01:00.0 is on",
"bbswitch: disabling discrete graphics",
"ACPI Warning: \_SB_.PCI0.PEG0.PEGP._DSM: Argument #4 type mismatch - Found [Buffer], ACPI requires [Package] (20141107/nsarguments-95)",
"Bluetooth: BNEP (Ethernet Emulation) ver 1.3",
"Bluetooth: BNEP filters: protocol multicast",
"Bluetooth: BNEP socket layer initialized",
"Bluetooth: RFCOMM TTY layer initialized",
"Bluetooth: RFCOMM socket layer initialized",
"Bluetooth: RFCOMM ver 1.11",
"iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled",
"iwlwifi 0000:03:00.0: Radio type=0x2-0x0-0x0",
"iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled",
"iwlwifi 0000:03:00.0: Radio type=0x2-0x0-0x0",
"wlan0: authenticate with 00:90:cc:ea:f4:16",
"wlan0: send auth to 00:90:cc:ea:f4:16 (try 1/3)",
"wlan0: authenticated",
"iwlwifi 0000:03:00.0 wlan0: disabling HT/VHT due to WEP/TKIP use",
"iwlwifi 0000:03:00.0 wlan0: disabling HT as WMM/QoS is not supported by the AP",
"iwlwifi 0000:03:00.0 wlan0: disabling VHT as WMM/QoS is not supported by the AP",
"wlan0: associate with 00:90:cc:ea:f4:16 (try 1/3)",
"wlan0: RX AssocResp from 00:90:cc:ea:f4:16 (capab=0x431 status=0 aid=3)",
"wlan0: associated",
"vboxdrv: Found 8 processor cores.",
"vboxdrv: fAsync=0 offMin=0x165 offMax=0x24ab",
"vboxdrv: TSC mode is 'synchronous', kernel timer mode is 'normal'.",
"vboxdrv: Successfully loaded version 4.3.26_Ubuntu (interface 0x001a000a).",
"vboxpci: IOMMU not found (not registered)",
"ip_tables: (C) 2000-2006 Netfilter Core Team",
"ip6_tables: (C) 2000-2006 Netfilter Core Team",
"Ebtables v2.0 registered",
"bridge: automatic filtering via arp/ip/ip6tables has been deprecated. Update your scripts to load br_netfilter if you need this.",
"device virbr0-nic entered promiscuous mode",
"nf_conntrack version 0.5.0 (16384 buckets, 65536 max)",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered disabled state",
"Initialising...", ""];